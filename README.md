# Colombian Holidays

[![npm version](https://badge.fury.io/js/colombian-holidays.svg)](https://badge.fury.io/js/colombian-holidays)

TypeScript module to work with Colombian holidays.

## Installation

```sh
npm install colombian-holidays
```

## Usage

Import each helper from its dedicated subpath (ESM only):

```js
import { FIRST_HOLIDAY_YEAR, LAST_HOLIDAY_YEAR } from "colombian-holidays/constants";
import { getHolidaysByYear } from "colombian-holidays/getHolidaysByYear";
import { getHoliday } from "colombian-holidays/getHoliday";
import { isHoliday } from "colombian-holidays/isHoliday";
import { holidaysWithinInterval } from "colombian-holidays/holidaysWithinInterval";
```

The supported year range is from `FIRST_HOLIDAY_YEAR` to `LAST_HOLIDAY_YEAR`.

```js
console.log(FIRST_HOLIDAY_YEAR); // 1583
console.log(LAST_HOLIDAY_YEAR); // 4099
```

All date comparisons are done in UTC.

## Public API

### getHolidaysByYear

Returns all Colombian holidays for a given year.

```js
import { getHolidaysByYear } from "colombian-holidays/getHolidaysByYear";

const holidays = getHolidaysByYear(2025);
```

Throws when the year is out of range:

```js
getHolidaysByYear(1582);
// Error: The year should be between 1583 and 4099
```

Return native `Date` values instead of ISO strings:

```js
const holidaysAsDates = getHolidaysByYear(2025, { valueAsDate: true });
```

Example output shape (`valueAsDate: false`, default):

```js
[
  {
    date: "2025-01-01",
    celebrationDate: "2025-01-01",
    name: { es: "Año Nuevo", en: "New Year's Day" },
    nextMonday: false,
  },
  {
    date: "2025-01-06",
    celebrationDate: "2025-01-13",
    name: { es: "Reyes Magos", en: "Epiphany" },
    nextMonday: true,
  },
];
```

`nextMonday` indicates whether the holiday is effectively moved to Monday in that year.
For years before 1984, moved holidays are not shifted.

If you need a specific month, filter by `celebrationDate`:

```js
const januaryHolidays = getHolidaysByYear(2025).filter((holiday) => {
  return Number(holiday.celebrationDate.slice(5, 7)) === 1;
});
```

> [!TIP]
> `getHolidaysByYear` uses an in-memory cache and is also used internally by the other helpers.

### isHoliday

Returns `true` if a date is a Colombian holiday, otherwise `false`.

```js
import { isHoliday } from "colombian-holidays/isHoliday";

const date = new Date("2018-01-01");

if (isHoliday(date)) {
  console.log("it is a colombian holiday");
} else {
  console.log("it is NOT a colombian holiday");
}
```

`isHoliday` checks the holiday celebration date (not always the original holiday date).

### getHoliday

Returns the holiday object for a given date, or `null` when there is no match.

```js
import { getHoliday } from "colombian-holidays/getHoliday";

const date = new Date("2018-01-01");
const holiday = getHoliday(date);

/*
  {
    celebrationDate: "2018-01-01",
    date: "2018-01-01",
    name: { en: "New Year's Day", es: "Año Nuevo" },
    nextMonday: false,
  }
*/
```

Returns `null` if the date is not a holiday.

Return native `Date` values:

```js
const holidayAsDate = getHoliday(date, { valueAsDate: true });
```

### holidaysWithinInterval

Returns holidays within an interval (inclusive bounds).

```js
import { holidaysWithinInterval } from "colombian-holidays/holidaysWithinInterval";

const start = new Date("2021-01-01");
const end = new Date("2021-01-11");
const holidays = holidaysWithinInterval({ start, end });
// const holidays = holidaysWithinInterval({ start, end, valueAsDate: true });
```

Throws when `start` is equal to or greater than `end`:

```js
holidaysWithinInterval({
  start: new Date("2022-01-01"),
  end: new Date("2022-01-01"),
});
// Error: end date should be greater than start date
```

Returns:

```js
[
  {
    celebrationDate: "2021-01-01",
    date: "2021-01-01",
    name: { es: "Año Nuevo", en: "New Year's Day" },
    nextMonday: false,
  },
  {
    celebrationDate: "2021-01-11",
    date: "2021-01-06",
    name: { es: "Reyes Magos", en: "Epiphany" },
    nextMonday: true,
  },
];
```

## Breaking change

As of this major version, the package no longer exports helpers from the root path.
Use subpath imports instead.

Before:

```js
import { getHolidaysByYear } from "colombian-holidays";
```

Now:

```js
import { getHolidaysByYear } from "colombian-holidays/getHolidaysByYear";
```

The package is ESM-only.

ESM:

```js
import { getHolidaysByYear } from "colombian-holidays/getHolidaysByYear";
```

CommonJS is not exported:

```js
require("colombian-holidays/getHolidaysByYear");
```

Builds are generated with `tsup` and published as ESM.

## TypeScript

The package is written in TypeScript and includes type definitions.

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FMauricioRobayo/colombian-holidays.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FMauricioRobayo/colombian-holidays?ref=badge_large)
