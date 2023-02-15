import type { DateHoliday, EasterHoliday } from "./types";

const dateHolidays: DateHoliday[] = [
  {
    date: "01-01",
    name: {
      es: "Año Nuevo",
      en: "New Year's day",
    },
    nextMonday: false,
  },
  {
    date: "01-06",
    name: {
      es: "Reyes Magos",
      en: "Epiphany",
    },
    nextMonday: true,
  },
  {
    date: "03-19",
    name: {
      es: "San José",
      en: "Saint Joseph's Day",
    },
    nextMonday: true,
  },
  {
    date: "05-01",
    name: {
      es: "Día del Trabajo",
      en: "Labour Day",
    },
    nextMonday: false,
  },
  {
    date: "06-29",
    name: {
      es: "San Pedro y San Pablo",
      en: "Saint Peter and Saint Paul",
    },
    nextMonday: true,
  },
  {
    date: "07-20",
    name: {
      es: "Grito de la Independencia",
      en: "Declaration of Independence",
    },
    nextMonday: false,
  },
  {
    date: "08-07",
    name: {
      es: "Batalla de Boyacá",
      en: "Battle of Boyacá",
    },
    nextMonday: false,
  },
  {
    date: "08-15",
    name: {
      es: "Asunción de la Virgen",
      en: "Assumption of Mary",
    },
    nextMonday: true,
  },
  {
    date: "10-12",
    name: {
      es: "Día de la Raza",
      en: "Columbus Day",
    },
    nextMonday: true,
  },
  {
    date: "11-01",
    name: {
      es: "Todos los Santos",
      en: "All Saints’ Day",
    },
    nextMonday: true,
  },
  {
    date: "11-11",
    name: { es: "Independencia de Cartagena", en: "Independence of Cartagena" },
    nextMonday: true,
  },
  {
    date: "12-08",
    name: { es: "Inmaculada Concepción", en: "Immaculate Conception" },
    nextMonday: false,
  },
  {
    date: "12-25",
    name: { es: "Navidad", en: "Christmas" },
    nextMonday: false,
  },
];

// We could simplify the calculation by setting the offset to match Monday.
// For example, the date for the 'Corpus Christi' is 60 days after Easter
// and that's the date it is celebrated in most countries. In Colombia,
// that date is moved to the next monday, hence, we use 60 for the offset
// and then get the next monday instead of directly using 64 as the offset.
// https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
const easterHolidays: EasterHoliday[] = [
  {
    offset: -3,
    name: { es: "Jueves Santo", en: "Maundy Thursday" },
    nextMonday: false,
  },
  {
    offset: -2,
    name: { es: "Viernes Santo", en: "Good Friday" },
    nextMonday: false,
  },
  {
    offset: 39,
    name: { es: "Ascensión del Señor", en: "Ascension of Jesus" },
    nextMonday: true,
  },
  {
    offset: 60,
    name: { es: "Corpus Christi", en: "Corpus Christi" },
    nextMonday: true,
  },
  {
    offset: 68,
    name: { es: "Sagrado Corazón de Jesús", en: "Sacred Heart" },
    nextMonday: true,
  },
];

export default [...dateHolidays, ...easterHolidays];
