# Colombian Holidays 🎆

[![npm version](https://badge.fury.io/js/colombian-holidays.svg)](https://badge.fury.io/js/colombian-holidays)
[![Build Status](https://github.com/MauricioRobayo/colombian-holidays/workflows/Build%20and%20Release/badge.svg)](https://github.com/MauricioRobayo/colombian-holidays/actions?query=workflow%3A%22Build+and+Release%22)
[![codecov](https://codecov.io/gh/MauricioRobayo/colombian-holidays/branch/master/graph/badge.svg)](https://codecov.io/gh/MauricioRobayo/colombian-holidays)
[![CodeFactor](https://www.codefactor.io/repository/github/mauriciorobayo/colombian-holidays/badge)](https://www.codefactor.io/repository/github/mauriciorobayo/colombian-holidays)

TypeScript module to calculate colombian holidays for any given year.

## Installation

To install as a dependency of your project:

```shell
npm install colombian-holidays
```

## Usage

The module exports a single function that allows to get all the holidays for a given year, returning an array with the holidays for the requested year.

The `year` should be between 1984 and 9999.

```js
const colombianHolidays = require('colombian-holidays');

const colombianHolidays2015 = colombianHolidays(2015);
```

The content of the `colombianHolidays2015` variable will be the following array:

<!-- prettier-ignore-start -->
```js
[
  { date: "2015-01-01", celebrationDate: "2015-01-01", name: "Año Nuevo" },
  { date: "2015-05-01", celebrationDate: "2015-05-01", name: "Día del Trabajo" },
  { date: "2015-07-20", celebrationDate: "2015-07-20", name: "Grito de la Independencia" },
  { date: "2015-08-07", celebrationDate: "2015-08-07", name: "Batalla de Boyacá" },
  { date: "2015-12-08", celebrationDate: "2015-12-08", name: "Inmaculada Concepción" },
  { date: "2015-12-25", celebrationDate: "2015-12-25", name: "Navidad" },
  { date: "2015-01-06", celebrationDate: "2015-01-12", name: "Reyes Magos" },
  { date: "2015-03-19", celebrationDate: "2015-03-23", name: "San José" },
  { date: "2015-06-29", celebrationDate: "2015-06-29", name: "San Pedro y San Pablo" },
  { date: "2015-08-15", celebrationDate: "2015-08-17", name: "Asunción de la Virgen" },
  { date: "2015-10-12", celebrationDate: "2015-10-12", name: "Día de la Raza" },
  { date: "2015-11-01", celebrationDate: "2015-11-02", name: "Todos los Santos" },
  { date: "2015-11-11", celebrationDate: "2015-11-16", name: "Independencia de Cartagena" },
  { date: "2015-04-02", celebrationDate: "2015-04-02", name: "Jueves Santo" },
  { date: "2015-04-03", celebrationDate: "2015-04-03", name: "Viernes Santo" },
  { date: "2015-05-18", celebrationDate: "2015-05-18", name: "Ascensión de Jesús" },
  { date: "2015-06-08", celebrationDate: "2015-06-08", name: "Corpus Christi" },
  { date: "2015-06-15", celebrationDate: "2015-06-15", name: "Sagrado Corazón de Jesús" },
];
```
<!-- prettier-ignore-end -->

If the year is omitted, by default the function will return the holidays for the current year:

```js
const colombianHolidays = colombianHolidays();
```

### TypeScript

The module is written in TypeScript and type definitions files are included.

## Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FMauricioRobayo%2Fcolombian-holidays.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FMauricioRobayo%2Fcolombian-holidays?ref=badge_large)
