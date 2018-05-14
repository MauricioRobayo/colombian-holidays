# Pascua 🎆 ![Bandera de Colombia](https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/25px-Flag_of_Colombia.svg.png)

[![Greenkeeper badge](https://badges.greenkeeper.io/archemiro/pascua.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.com/archemiro/pascua.svg?branch=master)](https://travis-ci.com/archemiro/pascua) [![codecov](https://codecov.io/gh/archemiro/pascua/branch/master/graph/badge.svg)](https://codecov.io/gh/archemiro/pascua)

![Colombia](https://media.giphy.com/media/sOQ7iOadT6gaQ/giphy.gif)

Calcula los días festivos en Colombia.

Colombia tiene 18 días festivos que se dividen en tres categorías:

1.  **Festivos de fecha fija**: Siempre se celebra el día correspondiente a esa fecha sin importar qué día cae. Ej. 25 de diciembre.
2.  **Festivos de próximo lunes**: Se celebra el lunes siguiente a la fecha en que cae el festivo. Ej. 6 de enero. Si ese día es lunes, se celebra ese mismo día.
3.  **Festivos respecto a la Pascua**: Se celebran según la diferencia con respecto al domingo de Pascua para ese año. Ej. Domingo de Pascua +45 días (Ascensión de Jesús).

Los siguientes son los festivos de **fecha fija**:

* 1 de enero: Año Nuevo.
* 8 de diciembre: Inmaculada Concepción.
* 25 de diciembre: Navidad.
* 1 de mayo: Día del Trabajo.
* 20 de julio: Grito de la Independencia.
* 7 de agosto: Batalla de Boyacá.

Los siguientes son los festivos de **próximo lunes**:

* 6 de enero: Reyes Magos.
* 19 de marzo: San José.
* 29 de junio: San Pedro y San Pablo.
* 15 de agosto: Asunción de la Virgen.
* 1 de noviembre: Todos los Santos.
* 12 de octubre: Día de la Raza.
* 11 de noviembre: Independencia de Cartagena.

Los siguientes son los festivos **respecto a la Pascua**:

* Pascua -7 días: Domingo de Ramos (no se considera festivo como tal por caer en Domingo).
* Pascua -3 días: Jueves Santo.
* Pascua -2 días: Viernes Santo.
* Pascua 0, días: Domingo de Pascua (no se considera festivo como tal por caer en Domingo).
* Pascua 43 días: Ascensión de Jesús.
* Pascua 64 días: Corpus Christi.
* Pascua 71 días: Sagrado Corazón de Jesús.

## Instalación

Para instalar el módulo como un dependencia del proyecto:

```shell
npm install pascua
```

Para usar este módulo en el navegador se puede cargar por medio de [`unpkg`](http://unpkg.org/)
usando el siguiente enlace: https://unpkg.com/pascua/dist/pascua.umd.min.js.

## Uso

Para su uso es importante tener en cuenta que la zona horaria esté configurada
para 'America/Bogota' en el sistema, de lo contrario se pueden tener resultados
inesperados. Si no se tiene la zona horaria correctamente configurada, lo ideal
es especificar una fecha en el formato ISO-8601 como en los ejemplos que se dan
a continuación, en donde se indica '-05:00' como el desplazamiento horario de
la fecha:

```js
const pascua = require("pascua");

// Especificamos la fecha en formato ISO 8601 para que sea interpretada como UTC
// y no como hora local para evitar saltos inesperados de fechas que producirían
//  resultados erroneos. Por ellos, el módulo procura trabajar siempre con UTC y
// el offset de la zona horaria correspondiente a Colombia ('America/Bogota'):
// -05:00 UTC.
const holidayDate = new Date("2017-04-13T00:00:00-05:00");
const holiday = pascua.getHoliday(holidayDate);
console.log(holiday); // 'Jueves Santo'

const noHolidayDate = new Date("2017-04-12T00:00:00-05:00");
const noHoliday = pascua.getHoliday(noHolidayDate);
console.log(noHoliday); // false
```

También podemos consultar los festivos correspondientes a cualquier año con la
función `getAllHolidays(year)`, que arrojará como resultado un array con los
festivos para el año solicitado. Por ejemplo:

```js
const pascua.getAllHolidays = require("pascua");

const holidays2010 = pascua.getAllHolidays(2010);
```

El contenido de `holidays2010` será el siguiente array:

```js
[
  { date: '2010-01-01T00:00:00.000-05:00', type: 1, name: 'Año Nuevo' },
  { date: '2010-05-01T00:00:00.000-05:00', type: 1, name: 'Día del Trabajo' },
  { date: '2010-07-20T00:00:00.000-05:00', type: 1, name: 'Grito de la Independencia' },
  { date: '2010-08-07T00:00:00.000-05:00', type: 1, name: 'Batalla de Boyacá' },
  { date: '2010-12-08T00:00:00.000-05:00', type: 1, name: 'Inmaculada Concepción' },
  { date: '2010-12-25T00:00:00.000-05:00', type: 1, name: 'Navidad' },
  { date: '2010-01-11T00:00:00.000-05:00', type: 2, name: 'Reyes Magos' },
  { date: '2010-03-22T00:00:00.000-05:00', type: 2, name: 'San José' },
  { date: '2010-07-05T00:00:00.000-05:00', type: 2, name: 'San Pedro y San Pablo' },
  { date: '2010-08-16T00:00:00.000-05:00', type: 2, name: 'Asunción de la Virgen' },
  { date: '2010-10-18T00:00:00.000-05:00', type: 2, name: 'Día de la Raza' },
  { date: '2010-11-01T00:00:00.000-05:00', type: 2, name: 'Todos los Santos' },
  { date: '2010-11-15T00:00:00.000-05:00', type: 2, name: 'Independencia de Cartagena' },
  { date: '2010-04-01T00:00:00.000-05:00', type: 3, name: 'Jueves Santo' },
  { date: '2010-04-02T00:00:00.000-05:00', type: 3, name: 'Viernes Santo' },
  { date: '2010-05-17T00:00:00.000-05:00', type: 3, name: 'Ascensión de Jesús' },
  { date: '2010-06-07T00:00:00.000-05:00', type: 3, name: 'Corpus Christi' },
  { date: '2010-06-14T00:00:00.000-05:00', type: 3, name: 'Sagrado Corazón de Jesús' },
],
```

## Licencia

[MIT](LICENSE).
