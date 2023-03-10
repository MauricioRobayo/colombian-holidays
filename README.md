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

The default export is a function to get all the holidays for a given year.

The `year` should be between 1583 and 4099 (see [Pascua](https://github.com/MauricioRobayo/pascua) package).

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
const colombianHolidays2015 = colombianHolidays({ year: 2015 });
```

The content of the `colombianHolidays2015` variable will be the following array:

```js
[
  {
    date: "2015-01-01",
    celebrationDate: "2015-01-01",
    name: {
      es: "Año Nuevo",
      en: "New Year's day",
    },
    nextMonday: false,
  },
  {
    date: "2015-01-06",
    celebrationDate: "2015-01-12",
    name: {
      es: "Reyes Magos",
      en: "Epiphany",
    },
    nextMonday: true,
  },
  {
    date: "2015-03-19",
    celebrationDate: "2015-03-23",
    name: {
      es: "San José",
      en: "Saint Joseph's Day",
    },
    nextMonday: true,
  },
  {
    date: "2015-04-02",
    celebrationDate: "2015-04-02",
    { es: "Jueves Santo", en: "Maundy Thursday" },
    nextMonday: false,
  },
  {
    date: "2015-04-03",
    celebrationDate: "2015-04-03",
    { es: "Viernes Santo", en: "Good Friday" },
    nextMonday: false,
  },
  {
    date: "2015-05-01",
    celebrationDate: "2015-05-01",
name: {
      es: "Día del Trabajo",
      en: "Labour Day",
    }
    nextMonday: false,
  },
  {
    date: "2015-05-14",
    celebrationDate: "2015-05-18",
    name: { es: "Ascensión del Señor", en: "Ascension of Jesus" },
    nextMonday: true,
  },
  {
    date: "2015-06-04",
    celebrationDate: "2015-06-08",
    name: { es: "Corpus Christi", en: "Corpus Christi" },
    nextMonday: true,
  },
  {
    date: "2015-06-12",
    celebrationDate: "2015-06-15",
    name: { es: "Sagrado Corazón de Jesús", en: "Sacred Heart" },
    nextMonday: true,
  },
  {
    date: "2015-06-29",
    celebrationDate: "2015-06-29",
    name: {
      es: "San Pedro y San Pablo",
      en: "Saint Peter and Saint Paul",
    },
    nextMonday: true,
  },
  {
    date: "2015-07-20",
    celebrationDate: "2015-07-20",
    name: {
      es: "Grito de la Independencia",
      en: "Declaration of Independence",
    },
    nextMonday: false,
  },
  {
    date: "2015-08-07",
    celebrationDate: "2015-08-07",
    name: {
      es: "Batalla de Boyacá",
      en: "Battle of Boyacá",
    },
    nextMonday: false,
  },
  {
    date: "2015-08-15",
    celebrationDate: "2015-08-17",
    name: {
      es: "Asunción de la Virgen",
      en: "Assumption of Mary",
    },
    nextMonday: true,
  },
  {
    date: "2015-10-12",
    celebrationDate: "2015-10-12",
    name: {
      es: "Día de la Raza",
      en: "Columbus Day",
    },
    nextMonday: true,
  },
  {
    date: "2015-11-01",
    celebrationDate: "2015-11-02",
    name: {
      es: "Todos los Santos",
      en: "All Saints’ Day",
    },
    nextMonday: true,
  },
  {
    date: "2015-11-11",
    celebrationDate: "2015-11-16",
    name: { es: "Independencia de Cartagena", en: "Independence of Cartagena" },
    nextMonday: true,
  },
  {
    date: "2015-12-08",
    celebrationDate: "2015-12-08",
    name: { es: "Inmaculada Concepción", en: "Immaculate Conception" },
    nextMonday: false,
  },
  {
    date: "2015-12-25",
    celebrationDate: "2015-12-25",
    name: { es: "Navidad", en: "Christmas" },
    nextMonday: false,
  },
];
```

Optionally, you can request the holidays for just a given month:

```js
const colombianHolidays2015 = colombianHolidays({
  year: 2015,
  month: 1 /* January */,
});
```

Returns:

```js
[
  {
    date: "2015-01-01",
    celebrationDate: "2015-01-01",
    name: {
      es: "Año Nuevo",
      en: "New Year's day",
    },
    nextMonday: false,
  },
  {
    date: "2015-01-06",
    celebrationDate: "2015-01-12",
    name: {
      es: "Reyes Magos",
      en: "Epiphany",
    },
    nextMonday: true,
  },
];
```

You can opt-in to have the function return native JavaScript dates instead of strings for the `date` and `celebrationDate` properties by using the `valueAsDate` option:

```js
const colombianHolidays2015 = colombianHolidays({
  year: 2015,
  valueAsDate: true,
});
```

If the year is omitted, by default the function will return the holidays for the current year:

```js
const currentYearHolidaysAsStrings = colombianHolidays();
const currentYearHolidaysAsDates = colombianHolidays({ valueAsDate: true });
```

## Utils

The package provides two helper functions which can be imported from `lib/utils`:

### isHoliday

Returns `true` if the given date is a colombian holiday, otherwise returns `false`.

```js
import { isHoliday } from "colombian-holidays/lib/utils/isHoliday";

const date = new Date("2018-01-01");

if (isHoliday(date)) {
  console.log("it is a colombian holiday");
} else {
  console.log("it is NOT a colombian holiday");
}
```

### getHoliday

Similar to `isHoliday` but will return the corresponding holiday for a given date or `null` if there is no matching holiday.

```js
import { getHoliday } from "colombian-holidays/lib/utils/getHoliday";

const date = new Date("2018-01-01");

const newYear = getHoliday(date);
/*
  {
    celebrationDate: "2018-01-01",
    date: "2018-01-01",
    name: { en: "New Year's Day", es: "Año Nuevo" },
    nextMonday: false,
  }
*/
```

To get the values as date use the options argument:

```js
const newYearAsDate = getHoliday(date, { valueAsDate: true });
```

### holidaysWithinInterval

Returns an array with the colombian holidays within two dates:

```js
import { holidaysWithinInterval } from "colombian-holidays/lib/utils/holidaysWithinInterval";

const start = new Date("2021-01-01");
const end = new Date("2021-01-11");
const holidays = holidaysWithinInterval({ start, end });
// const holidays = holidaysWithinInterval({ start, end, valueAsDate: true });
```

returns:

```js
[
  {
    celebrationDate: "2021-01-01",
    date: "2021-01-01",
    name: {
      es: "Año Nuevo",
      en: "New Year's day",
    },
    nextMonday: false,
  },
  {
    celebrationDate: "2021-01-11",
    date: "2021-01-06",
    name: {
      es: "Reyes Magos",
      en: "Epiphany",
    },
    nextMonday: true,
  },
];
```

### TypeScript

The module is written in TypeScript and type definitions files are included.

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FMauricioRobayo%2Fcolombian-holidays.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FMauricioRobayo%2Fcolombian-holidays?ref=badge_large)
