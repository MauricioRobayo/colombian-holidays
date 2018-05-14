(function(global) {
  var isHoliday = false;
  var holidays = pascua.getAllHolidays().sort(function(a, b) {
    return b.date.localeCompare(a.date);
  });
  var dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  console.table(holidays);
  var date = new Date();
  var table = document.getElementById("festivos-colombia");
  for (var i = 0; i < holidays.length; i++) {
    var row = table.insertRow();
    var festivoName = row.insertCell(0);
    festivoName.classList.add("has-text-centered");
    if (date.toISOString().localeCompare(holidays[i].date) === 1) {
      if (date.toISOString().slice(0, 10) === holidays[i].date.slice(0, 10)) {
        festivoName.classList.add("is-selected");
        isHoliday = true;
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
  h1(date.getFullYear());
  function h1(year) {
    var h1 = document.createElement("h1");
    if (isHoliday) {
      h1.appendChild(document.createTextNode("Hoy es festivo en Colombia"));
      document.getElementById("hero").classList.add("is-primary");
    } else {
      h1.appendChild(
        document.createTextNode(
          "Hoy <span class=''>NO</span> es festivo en Colombia"
        )
      );
      document.getElementById("hero").classList.add("is-light");
    }
    h1.classList.add("title", "has-text-centered", "is-size-1");
    document.getElementById("main").appendChild(h1);
  }
})(window);
