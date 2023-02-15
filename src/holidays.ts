import type { DateHoliday, EasterHoliday } from "./types";

const dateHolidays: DateHoliday[] = [
  {
    month: 1,
    day: 1,
    name: {
      es: "Año Nuevo",
      en: "New Year's day",
    },
    nextMonday: false,
  },
  {
    month: 1,
    day: 6,
    name: {
      es: "Reyes Magos",
      en: "Epiphany",
    },
    nextMonday: true,
  },
  {
    month: 3,
    day: 19,
    name: {
      es: "San José",
      en: "Saint Joseph's Day",
    },
    nextMonday: true,
  },
  {
    month: 5,
    day: 1,
    name: {
      es: "Día del Trabajo",
      en: "Labour Day",
    },
    nextMonday: false,
  },
  {
    month: 6,
    day: 29,
    name: {
      es: "San Pedro y San Pablo",
      en: "Saint Peter and Saint Paul",
    },
    nextMonday: true,
  },
  {
    month: 7,
    day: 20,
    name: {
      es: "Grito de la Independencia",
      en: "Declaration of Independence",
    },
    nextMonday: false,
  },
  {
    month: 8,
    day: 7,
    name: {
      es: "Batalla de Boyacá",
      en: "Battle of Boyacá",
    },
    nextMonday: false,
  },
  {
    month: 8,
    day: 15,
    name: {
      es: "Asunción de la Virgen",
      en: "Assumption of Mary",
    },
    nextMonday: true,
  },
  {
    month: 10,
    day: 12,
    name: {
      es: "Día de la Raza",
      en: "Columbus Day",
    },
    nextMonday: true,
  },
  {
    month: 11,
    day: 1,
    name: {
      es: "Todos los Santos",
      en: "All Saints’ Day",
    },
    nextMonday: true,
  },
  {
    month: 11,
    day: 11,
    name: { es: "Independencia de Cartagena", en: "Independence of Cartagena" },
    nextMonday: true,
  },
  {
    month: 12,
    day: 8,
    name: { es: "Inmaculada Concepción", en: "Immaculate Conception" },
    nextMonday: false,
  },
  {
    month: 12,
    day: 25,
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
