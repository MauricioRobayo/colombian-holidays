# Pascua 🎆

[![install size](https://packagephobia.now.sh/badge?p=pascua)](https://packagephobia.now.sh/result?p=pascua)
[![gzip size](https://img.badgesize.io/https://unpkg.com/pascua/dist/pascua.js?compression=gzip)](https://unpkg.com/pascua/dist/pascua.js)
[![Blazing Fast](https://img.shields.io/badge/speed-blazing%20%F0%9F%94%A5-brightgreen.svg?style=flat-square)](https://twitter.com/acdlite/status/974390255393505280)

[![npm version](https://badge.fury.io/js/pascua.svg)](https://badge.fury.io/js/pascua)
[![Build Status](https://travis-ci.com/archemiro/pascua.svg?branch=master)](https://travis-ci.com/archemiro/pascua)
[![codecov](https://codecov.io/gh/archemiro/pascua/branch/master/graph/badge.svg)](https://codecov.io/gh/archemiro/pascua)
[![Greenkeeper badge](https://badges.greenkeeper.io/archemiro/pascua.svg)](https://greenkeeper.io/)

Módulo **extraligero** y **sin dependencias** para calcular los [días festivos en Colombia](https://www.archemiro.com/pascua/).

---

Pascua permite obtener los días festivos a partir de 1984 año en que entra en vigencia la [Ley 51 de 1983](http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954), que establece los días festivos para Colombia de la forma en que se celebran actualmente.

Para su cálculo, los días feriados en Colombia se dividen en tres categorías y son 18 días festivos en total:

1. **Festivos de fecha fija**: Siempre se celebra el día correspondiente a esa fecha sin importar qué día cae. Ej. 25 de diciembre.
2. **Festivos de próximo lunes**: Se celebra el lunes siguiente a la fecha en que cae el festivo. Ej. 6 de enero. Si ese día es lunes, se celebra ese mismo día.
3. **Festivos respecto a la Pascua**: Se celebran según la diferencia con respecto al domingo de Pascua para ese año. Ej. Domingo de Pascua +45 días (Ascensión de Jesús).

Los siguientes son los festivos de **fecha fija**:

- 1 de enero: Año Nuevo.
- 8 de diciembre: Inmaculada Concepción.
- 25 de diciembre: Navidad.
- 1 de mayo: Día del Trabajo.
- 20 de julio: Grito de la Independencia.
- 7 de agosto: Batalla de Boyacá.

Los siguientes son los festivos de **próximo lunes**:

- 6 de enero: Reyes Magos.
- 19 de marzo: San José.
- 29 de junio: San Pedro y San Pablo.
- 15 de agosto: Asunción de la Virgen.
- 1 de noviembre: Todos los Santos.
- 12 de octubre: Día de la Raza.
- 11 de noviembre: Independencia de Cartagena.

Los siguientes son los festivos **respecto a la Pascua**:

- Pascua -7 días: Domingo de Ramos (no se considera festivo como tal por caer en Domingo).
- Pascua -3 días: Jueves Santo.
- Pascua -2 días: Viernes Santo.
- Pascua: Domingo de Pascua (no se considera festivo como tal por caer en Domingo).
- Pascua 43 días: Ascensión de Jesús.
- Pascua 64 días: Corpus Christi.
- Pascua 71 días: Sagrado Corazón de Jesús.

## Instalación

Para instalar el módulo como un dependencia del proyecto:

```shell
npm install pascua
```

Para usar este módulo en el navegador se puede cargar por medio de [`unpkg`](http://unpkg.org/)
usando el siguiente [enlace](https://unpkg.com/pascua/dist/pascua.js). El objeto `pascua` estará disponible de manera global.

## Uso

Pascua incluye dos funciones: `getHoliday` y `getAllHolidays`.

### Determinar si un día dado es festivo

La función `getHoliday` permite saber si un día determinado es festivo o no. Recibe como argumento opcional una fecha de JavaScript y devuelve el nombre del festivo que aplica para la fecha o una cadena de texto vacía (`""`) si la fecha no corresponde con un festivo:

```js
const { getHoliday } = require("pascua");

const date = new Date("13-04-2017");
const holiday = getHoliday(date);
console.log(holiday); // 'Jueves Santo'
```

Si se omite la fecha como argumento, por defecto se usará la fecha actual.

### Obtener todos los días festivos para un año determinado

La la función `getAllHolidays(year)` permite consultar los festivos correspondientes a cualquier año, devolviendo un array con los festivos para el año solicitado. Por ejemplo:

```js
const { getAllHolidays } = require("pascua");

const holidays2010 = getAllHolidays(2010);
```

El contenido de `holidays2010` será el siguiente array:

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

Si se omite el año como argumento, por defecto se usará el año actual.

## Licencia

[MIT](LICENSE).

Hecho en ![Bandera de Colombia](https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/16px-Flag_of_Colombia.svg.png) con mucho ☕.
