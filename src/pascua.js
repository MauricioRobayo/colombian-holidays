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

function validateYear(year) {
  const int = Number.parseInt(year, 10);
  // En 1983 se expide la ley por la cual se corren algunos festivos al próximo lunes
  // http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
  if (Number.isNaN(int) || int < 1984) {
    throw new Error("Invalid year. Should be an integer > 1983");
  }
  return int;
}

function isValidDate(date) {
  return (
    Object.prototype.toString.call(date) === "[object Date]" &&
    validateYear(date.getFullYear())
  );
}

function addDays(date, amount) {
  const resultDate = new Date(date.getTime());
  resultDate.setDate(resultDate.getDate() + amount);
  return resultDate;
}

function isSameDate(date1, date2) {
  // Es irrelevante verificar el año ya que el festivo siempre lo creamos a partir del año de la fecha que se pasó como argumento inicial, por lo tanto siempre estamos comparando fechas del mismo año y sólo necesitamos verificar el mes y el día.
  return (
    date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth()
  );
}

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
