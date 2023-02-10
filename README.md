# Colombian Holidays 🎆

[![npm version](https://badge.fury.io/js/colombian-holidays.svg)](https://badge.fury.io/js/colombian-holidays)
[![build and release](https://github.com/MauricioRobayo/colombian-holidays/actions/workflows/build-and-release.yml/badge.svg)](https://github.com/MauricioRobayo/colombian-holidays/actions/workflows/build-and-release.yml)
[![codecov](https://codecov.io/gh/MauricioRobayo/colombian-holidays/branch/master/graph/badge.svg)](https://codecov.io/gh/MauricioRobayo/colombian-holidays)
[![CodeFactor](https://www.codefactor.io/repository/github/mauriciorobayo/colombian-holidays/badge)](https://www.codefactor.io/repository/github/mauriciorobayo/colombian-holidays)

TypeScript module to calculate colombian holidays for any given year.

## Installation

To install as a dependency of your project:

```shell
npm install colombian-holidays
```

## Usage

The module exports a single function to get all the holidays for a given year, returning an array with the holidays for the requested year.

The `year` should be between 1583 and 4099.

### CommonJS

```js
const colombianHolidays = require("colombian-holidays").default;
```

### ES6 Modules

```js
import colombianHolidays from "colombian-holidays";
```

You get a function that you can use to get the complete list of holidays for a given year:

```js
const colombianHolidays2015 = colombianHolidays(2015);
```

The content of the `colombianHolidays2015` variable will be the following array:

<!-- prettier-ignore-start -->
```js
[
  { date: '2015-01-01', celebrationDate: '2015-01-01', name: 'Año Nuevo', nextMonday: false },
  { date: '2015-01-06', celebrationDate: '2015-01-12', name: 'Reyes Magos', nextMonday: true },
  { date: '2015-03-19', celebrationDate: '2015-03-23', name: 'San José', nextMonday: true },
  { date: '2015-04-02', celebrationDate: '2015-04-02', name: 'Jueves Santo', nextMonday: false },
  { date: '2015-04-03', celebrationDate: '2015-04-03', name: 'Viernes Santo', nextMonday: false },
  { date: '2015-05-01', celebrationDate: '2015-05-01', name: 'Día del Trabajo', nextMonday: false },
  { date: '2015-05-14', celebrationDate: '2015-05-18', name: 'Ascensión del Señor', nextMonday: true },
  { date: '2015-06-04', celebrationDate: '2015-06-08', name: 'Corpus Christi', nextMonday: true },
  { date: '2015-06-12', celebrationDate: '2015-06-15', name: 'Sagrado Corazón de Jesús', nextMonday: true },
  { date: '2015-06-29', celebrationDate: '2015-06-29', name: 'San Pedro y San Pablo', nextMonday: true },
  { date: '2015-07-20', celebrationDate: '2015-07-20', name: 'Grito de la Independencia', nextMonday: false },
  { date: '2015-08-07', celebrationDate: '2015-08-07', name: 'Batalla de Boyacá', nextMonday: false },
  { date: '2015-08-15', celebrationDate: '2015-08-17', name: 'Asunción de la Virgen', nextMonday: true },
  { date: '2015-10-12', celebrationDate: '2015-10-12', name: 'Día de la Raza', nextMonday: true },
  { date: '2015-11-01', celebrationDate: '2015-11-02', name: 'Todos los Santos', nextMonday: true },
  { date: '2015-11-11', celebrationDate: '2015-11-16', name: 'Independencia de Cartagena', nextMonday: true },
  { date: '2015-12-08', celebrationDate: '2015-12-08', name: 'Inmaculada Concepción', nextMonday: false },
  { date: '2015-12-25', celebrationDate: '2015-12-25', name: 'Navidad', nextMonday: false },
]
```
<!-- prettier-ignore-end -->

You can opt-in to have the function return native JavaScript dates instead of strings for the `date` and `celebrationDate` properties by using the `returnNativeDate` option:

<!-- prettier-ignore-start -->

```js
const colombianHolidays2015 = colombianHolidays(2015, { returnNativeDate });
```

If the year is omitted, by default the function will return the holidays for the current year:

```js
const currentYearHolidays = colombianHolidays();
```

## Utils

The package provides two helper functions which can be imported from `lib/utils`:

### isHoliday

Returns true if the given date is a colombian holiday, otherwise returns false.

```js
import { isHoliday } from 'colombian-holidays/lib/utils/isHoliday`

const date = new Date("2018-01-01T05:00:00.000Z")

if (isHoliday(date)) {
  console.log('it is a colombian holiday');
} else {
  console.log('it is NOT a colombian holiday');
}
```

### holidaysWithinInterval

Returns an with the colombian holidays within two dates:

```js
import { holidaysWithinInterval } from 'colombian-holidays/lib/utils/holidaysWithinInterval`

const start = new Date("2021-01-01");
const end = new Date("2021-01-11");
const holidays = holidaysWithinInterval({ start, end });
```

returns:

```js
[
  {
    celebrationDate: "2021-01-01",
    date: "2021-01-01",
    name: "Año Nuevo",
    nextMonday: false,
  },
  {
    celebrationDate: "2021-01-11",
    date: "2021-01-06",
    name: "Reyes Magos",
    nextMonday: true,
  },
]
```

### TypeScript

The module is written in TypeScript and type definitions files are included.

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FMauricioRobayo%2Fcolombian-holidays.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FMauricioRobayo%2Fcolombian-holidays?ref=badge_large)
