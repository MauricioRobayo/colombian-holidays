(function(global) {

  // el año actual sobre el que se va a cargar la página
  var year = new Date().getFullYear();

  // el contenedor en donde vamos a incrustar la lista desplegable
  // con los años disponibles
  var yearsDiv = document.getElementById("years");

  // creamos la lista desplegable en donde vamos a cargar los
  // año a partir de 1984 hasta cinco años pasado el año actual
  var selectList = document.createElement("select");
  selectList.id = "pascuaYears";
  yearsDiv.appendChild(selectList);

  // agregramos las opciones a la lista desplegable, desde 1984
  // hasta cinco años pasado el años actual y dejamos seleccionado
  // el año actual.
  for (var i = 1984; i <= year + 5; i++) {
    var option = document.createElement("option");
      option.value = i;
      option.text = i;
      if (i === year) {
        option.selected = true;
      }
      selectList.appendChild(option);
  }

  function loadHolidays() {

    // obtenemos todos los festivos para el año deseado y los ordenamos
    // de menor a mayor por fecha
    var holidays = pascua.getAllHolidays(selectList.value).sort(function(a, b) {
      return b.date.localeCompare(a.date);
    });

    // opciones de formato para la fecha
    var dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    var date = new Date();
    var table = document.getElementById("festivos-colombia");
    table.innerHTML = "";
    for (var i = 0; i < holidays.length; i++) {
      var row = table.insertRow();
      var festivoName = row.insertCell(0);
      festivoName.classList.add("has-text-centered");
      if (date.toISOString().localeCompare(holidays[i].date) === 1) {
        if (date.toISOString().slice(0, 10) === holidays[i].date.slice(0, 10)) {
          festivoName.classList.add("is-selected");
        } else {
          festivoName.classList.add("has-background-light");
          festivoName.classList.add("has-text-grey-light");
        }
      }
      festivoName.innerHTML =
        "<p class='is-size-3'>" +
        holidays[i].name +
        "</p><p class='is-size-6'>" +
        new Intl.DateTimeFormat("es", dateOptions).format(
          new Date(holidays[i].date)
        ) +
        "</p>";
    }
  }

  loadHolidays();

  selectList.addEventListener("change", loadHolidays);

})(window);
