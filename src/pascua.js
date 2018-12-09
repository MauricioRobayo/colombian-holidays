const holidays = [
  { type: 1, name: "Año Nuevo", day: 1, month: 1 },
  { type: 1, name: "Día del Trabajo", day: 1, month: 5 },
  { type: 1, name: "Grito de la Independencia", day: 20, month: 7 },
  { type: 1, name: "Batalla de Boyacá", day: 7, month: 8 },
  { type: 1, name: "Inmaculada Concepción", day: 8, month: 12 },
  { type: 1, name: "Navidad", day: 25, month: 12 },
  { type: 2, name: "Reyes Magos", day: 6, month: 1 },
  { type: 2, name: "San José", day: 19, month: 3 },
  { type: 2, name: "San Pedro y San Pablo", day: 29, month: 6 },
  { type: 2, name: "Asunción de la Virgen", day: 15, month: 8 },
  { type: 2, name: "Día de la Raza", day: 12, month: 10 },
  { type: 2, name: "Todos los Santos", day: 1, month: 11 },
  { type: 2, name: "Independencia de Cartagena", day: 11, month: 11 },
  { type: 3, name: "Jueves Santo", offset: -3 },
  { type: 3, name: "Viernes Santo", offset: -2 },
  { type: 3, name: "Ascensión de Jesús", offset: 43 },
  { type: 3, name: "Corpus Christi", offset: 64 },
  { type: 3, name: "Sagrado Corazón de Jesús", offset: 71 }
];

/**
 * Valida si el año pasado como argumento es un número entero mayor a 1983. En 1983 se expide la ley por la cual se corren algunos festivos al próximo lunes: http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
 * @param {number} year El año para el cual se desea obtener los días festivos. Mayor a 1983.
 * @returns {int} El año convertido a un número entero mayor a 1983.
 */
function validateYear(year) {
  const int = Number.parseInt(year, 10);
  if (Number.isNaN(int) || int < 1984) {
    throw new Error("Invalid year. Should be an integer > 1983");
  }
  return int;
}

/**
 * Valida si el argumento pasado corresponde a un objeto de tipo fecha de JavaScript y si el año de esa fecha es mayor a 1983, que es el año en el que se establece el decreto que rige los festivos actuales: http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
 * @param {any} date La fecha que se desea validar.
 * @returns {boolean} Verdadero si es una fecha válida falso de lo contrario.
 */
function isValidDate(date) {
  return (
    Object.prototype.toString.call(date) === "[object Date]" &&
    validateYear(date.getFullYear())
  );
}

/**
 * Crea una nueva fecha a la que se le han sumado los días especificados en el argumento amount.
 * @param {object} date Fecha tipo JavaScript.
 * @param {number} amount Días que se desean sumar.
 * @returns {date} Nueva fecha resultante tras sumarle la cantidad de días especificados.
 */
function addDays(date, amount) {
  const resultDate = new Date(date.getTime());
  resultDate.setDate(resultDate.getDate() + amount);
  return resultDate;
}

/**
 * Compara si dos fechas son la misma a nivel de día y mes, no se tiene en cuenta las horas sino sólo si son o no el mismo día del mismo mes. Es irrelevante verificar el año ya que el festivo siempre lo creamos a partir del año de la fecha que se pasó como argumento inicial, por lo tanto siempre estamos comparando fechas del mismo año y sólo necesitamos verificar el mes y el día.
 * @param {object} date1 Objeto fecha de JavaScript
 * @param {object} date2 Objeto fecha de JavaScript
 * @returns {boolean} Verdadero si el mes y el día son el mismo de lo contrario devuelve falso.
 */
function isSameDate(date1, date2) {
  return (
    date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth()
  );
}

/**
 * Devuelve el próximo día de la semana especificado en el argumento 'dayOfWeek' a partir de la fecha especificada. Por ejemplo, para obtener el lunes siguiente a una fecha especificada se usaría:
 *    const nextMonday = getNextDayOfWeek(fecha, 1);
 * Si la fecha corresponde al mismo día solicitado se devuelve la misma fecha. En el caso anterior si la 'fecha' pasada como argumento es lunes, entonces la función devolverá la misma fecha.
 * Basado en:  https://codereview.stackexchange.com/a/33532/146118
 * @param {object} date Fecha a evaluar
 * @param {number} dayOfWeek Día de la semana que se desea. 0 = Domingo.
 * @returns {object} Fecha correspondiente al siguiente día de la semana que se ha solicitado.
 */
function getNextDayOfWeek(date, dayOfWeek) {
  const resultDate = new Date(date.getTime());
  resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7));
  return resultDate;
}

/**
 * Devuelve la fecha que corresponde al domingo de Pascua para el año indicado usando el algoritmo de Butcher: https://es.wikipedia.org/wiki/Computus#C.C3.A1lculo
 * Las fiestas correspondientes a la Pascua se calculan con referencia a esta fecha de la siguiente forma:
 *   Pascua -7  :  Domingo de Ramos
 *   Pascua -3  :  Jueves Santo
 *   Pascua -2  :  Viernes Santo
 *   Pascua     :  Domingo de Pascua
 *   Pascua +43 :  Ascensión de Jesús
 *   Pascua +64 :  Corpus Christi
 *   Pascua +71 :  Sagrado Corazón de Jesús
 * Ni el 'Domingo de Pascua' como tal, ni el 'Domingo de Ramos' se consideran días festivos.
 * @param {number} year Año para el cual se desea saber el Domingo de Pascua.
 * @param {string} timeOffset Desplazamiento de la zona horaria. Por defecto es '-05:00'.
 * @returns {date} La fecha correspondiente al domingo de Pascua.
 */
function getPascua(year) {
  const A = year % 19;
  const B = Math.floor(year / 100);
  const C = year % 100;
  const D = Math.floor(B / 4);
  const E = B % 4;
  const F = Math.floor((B + 8) / 25);
  const G = Math.floor((B - F + 1) / 3);
  const H = (19 * A + B - D - G + 15) % 30;
  const I = Math.floor(C / 4);
  const K = C % 4;
  const L = (32 + 2 * E + 2 * I - H - K) % 7;
  const M = Math.floor((A + 11 * H + 22 * L) / 451);
  const N = H + L - 7 * M + 114;
  const month = Math.floor(N / 31);
  const day = 1 + (N % 31);
  const pascua = new Date(year, month - 1, day);
  return pascua;
}

/**
 * Devuelve el nombre del festivo correspondiente a la fecha indicada si la fecha indicada es festivo, de lo contrario devuelve false. Exiten tres tipos de festivos en Colombia:
 *   1. De fecha fija: Siempre se celebra el día correspondiente a ese fecha. Ej. 25 de diciembre.
 *   2. Próximo lunes: Se celebra el lunes siguiente a la fecha en que cae el festivo. Ej. 6 de enero. Si cae en lunes, se celebra ese mismo día.
 *   3. Respecto a la Pascua: Se celebran según la diferencia con respecto al domingo de Pascua para ese año. Ej. Domingo de Pascua +45 días (Ascensión de Jesús).
 * @param {object} date Objeto tipo fecha para el cual se desea saber si es festivo.
 * @param {string} timeOffset Desplazamiento de la zona horaria. Por defecto es '-05:00'.
 * @returns {string} El nombre del festivo o una cadena de texto vacia.
 */
function getHoliday(date = new Date()) {
  if (!isValidDate(date)) {
    throw new Error("Invalid date.");
  }
  const year = date.getFullYear();
  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].type === 1) {
      const holiday = new Date(year, holidays[i].month - 1, holidays[i].day);
      if (isSameDate(date, holiday)) {
        return holidays[i].name;
      }
    }
    if (holidays[i].type === 2) {
      const holiday = new Date(year, holidays[i].month - 1, holidays[i].day);
      const nextMonday = getNextDayOfWeek(holiday, 1);
      if (isSameDate(date, nextMonday)) {
        return holidays[i].name;
      }
    }
    if (holidays[i].type === 3) {
      const pascua = getPascua(year);
      const pascuaHoliday = addDays(pascua, holidays[i].offset);
      if (isSameDate(date, pascuaHoliday)) {
        return holidays[i].name;
      }
    }
  }
  return "";
}

/**
 * Devuelve un array de objectos con todos los festivos del año indicado, en donde cada objeto contiene la información de un día festivo. Este es un ejemplo del primer elemento del array devuelto para el año 2010:
 *  { date: '2010-01-01T00:00:00.000-05:00',
 *    type: '1',
 *    name: 'Año Nuevo' }
 * @param {number} year El año para el cual deseamos saber los festivos
 * @returns {array} Los festivos para el año solicitado.
 */
function getAllHolidays(year = new Date().getFullYear()) {
  const validYear = validateYear(year);
  const yearHolidays = [];
  for (let i = 0; i < holidays.length; i += 1) {
    let holidayDate;
    if (holidays[i].type === 1) {
      holidayDate = new Date(validYear, holidays[i].month - 1, holidays[i].day);
    }
    if (holidays[i].type === 2) {
      holidayDate = getNextDayOfWeek(
        new Date(validYear, holidays[i].month - 1, holidays[i].day),
        1
      );
    }
    if (holidays[i].type === 3) {
      holidayDate = addDays(getPascua(validYear), holidays[i].offset);
    }
    yearHolidays.push({
      date: holidayDate.toISOString().substring(0, 10),
      type: holidays[i].type,
      name: holidays[i].name
    });
  }
  return yearHolidays;
}

module.exports = { getHoliday, getAllHolidays };
