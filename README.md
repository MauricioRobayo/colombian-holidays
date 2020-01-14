# Pascua 🎆

[![install size](https://packagephobia.now.sh/badge?p=pascua)](https://packagephobia.now.sh/result?p=pascua)
[![gzip size](https://img.badgesize.io/https://unpkg.com/pascua/dist/pascua.js?compression=gzip)](https://unpkg.com/pascua/dist/pascua.js)
[![Blazing Fast](https://img.shields.io/badge/speed-blazing%20%F0%9F%94%A5-brightgreen.svg?style=flat-square)](https://twitter.com/acdlite/status/974390255393505280)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMauricioRobayo%2Fpascua.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMauricioRobayo%2Fpascua?ref=badge_shield)

[![npm version](https://badge.fury.io/js/pascua.svg)](https://badge.fury.io/js/pascua)
[![Build Status](https://github.com/MauricioRobayo/pascua/workflows/Build%20and%20Release/badge.svg)](https://github.com/MauricioRobayo/pascua/actions?query=workflow%3A%22Build+and+Release%22)
[![codecov](https://codecov.io/gh/MauricioRobayo/pascua/branch/master/graph/badge.svg)](https://codecov.io/gh/MauricioRobayo/pascua)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a64471b907c44f7587aea4e3aab9d442)](https://www.codacy.com/app/MauricioRobayo/pascua?utm_source=github.com&utm_medium=referral&utm_content=MauricioRobayo/pascua&utm_campaign=Badge_Grade)
[![Greenkeeper badge](https://badges.greenkeeper.io/MauricioRobayo/pascua.svg)](https://greenkeeper.io/)

Extralight and no dependencies module to get [Colombian holidays](https://www.mauriciorobayo.com/festivos-colombia).

---

Getting Colombian holidays is a little bit tricky because there are three types of holidays:

1. **Fixed date**: 6 holidays - Celebrated the same date they fall.
2. **Next monday**: 7 holidays - Moved to the next moday after the date they fall.
3. **Relative to easter**: 5 holidays - Celebrated relative to [easter](https://en.wikipedia.org/wiki/Easter).

## Installation

To install as a dependency of your project:

```shell
npm install pascua
```

To load it on the browser you can use [`unpkg`](http://unpkg.org/), just add the following [script](https://unpkg.com/pascua/dist/pascua.js). The `pascua` object will be available globally.

## Use

Pascua include two functions: `getHoliday` y `getAllHolidays`.

### Tell if a given date is holiday

The `getHoliday` function allows to check if a given date is a holiday. It takes as an optional argument a JavaScript date and returns the name of the holiday in case the date is a holiday, or an empty string (`""`)if it isn't.

```js
const { getHoliday } = require('pascua')

const date = new Date('13-04-2017')
const holiday = getHoliday(date)
console.log(holiday)
// 'Jueves Santo'
```

If the date is ommited, by defaul the function is going to use the current date.

### Get all holidays for a given year

The function `getAllHolidays(year)` allows to get all the holidays for a given year, returning an array with the holidays for the requested year:

```js
const { getAllHolidays } = require('pascua')

const holidays2010 = getAllHolidays(2010)
```

The content of the `holidays2010` variable will be the following array:

```js
[
  { date: '2010-01-01', type: 1, name: 'Año Nuevo' },
  { date: '2010-05-01', type: 1, name: 'Día del Trabajo' },
  { date: '2010-07-20', type: 1, name: 'Grito de la Independencia' },
  { date: '2010-08-07', type: 1, name: 'Batalla de Boyacá' },
  { date: '2010-12-08', type: 1, name: 'Inmaculada Concepción' },
  { date: '2010-12-25', type: 1, name: 'Navidad' },
  { date: '2010-01-11', type: 2, name: 'Reyes Magos' },
  { date: '2010-03-22', type: 2, name: 'San José' },
  { date: '2010-07-05', type: 2, name: 'San Pedro y San Pablo' },
  { date: '2010-08-16', type: 2, name: 'Asunción de la Virgen' },
  { date: '2010-10-18', type: 2, name: 'Día de la Raza' },
  { date: '2010-11-01', type: 2, name: 'Todos los Santos' },
  { date: '2010-11-15', type: 2, name: 'Independencia de Cartagena' },
  { date: '2010-04-01', type: 3, name: 'Jueves Santo' },
  { date: '2010-04-02', type: 3, name: 'Viernes Santo' },
  { date: '2010-05-17', type: 3, name: 'Ascensión de Jesús' },
  { date: '2010-06-07', type: 3, name: 'Corpus Christi' },
  { date: '2010-06-14', type: 3, name: 'Sagrado Corazón de Jesús' },
],
```

Is the year is ommited, by default the function will return the holidays for the current year.

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## License

[MIT](LICENSE).

Made in ![Bandera de Colombia](https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/16px-Flag_of_Colombia.svg.png).


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMauricioRobayo%2Fpascua.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMauricioRobayo%2Fpascua?ref=badge_large)