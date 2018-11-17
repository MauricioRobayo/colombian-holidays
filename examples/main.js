(function() {
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
      return a.date.localeCompare(b.date);
    });

    // opciones de formato para la fecha
    var dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    var dateFormat = new Intl.DateTimeFormat("es", dateOptions);

    // la fecha actual para contrastar si un festivo ya pasó aún no ha pasado
    var date = new Date();

    // la tabla en donde vamos a insertar los festivos para el año seleccionado
    var table = document.getElementById("festivos-colombia");

    // limpiamos el contenido de la tabla antes de insertar los resultados.
    table.innerHTML = "";

    // recorremos cada uno de los festivos obtenidos para generar una columna
    // con la información de cada festivo
    for (var i = 0; i < holidays.length; i++) {
      // creamos un fecha de JS para poder realizar los cálculos y conversiones
      var holidayDate = new Date(holidays[i].date);
      // agregamos una nueva fila a la tabla
      var row = table.insertRow();
      // agregamos una nueva celda a la fila que acabamos de crear
      var festivoName = row.insertCell(0);
      // damos el formato de acuerdo a lo que deseamos
      festivoName.classList.add("has-text-centered");
      if (holidayDate <= date) {
        if (date.toISOString() === holidayDate.toISOString()) {
          festivoName.classList.add("is-selected");
        } else {
          festivoName.classList.add("has-text-grey-light");
        }
      }
      festivoName.innerHTML =
        "<p class='is-size-3'>" +
        holidays[i].name +
        "</p><p class='is-size-6'>" +
        dateFormat.format(holidayDate) +
        "</p>";
    }
  }

  loadHolidays();

  selectList.addEventListener("change", loadHolidays);
})();
