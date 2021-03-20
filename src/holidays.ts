import { DateHoliday, EasterHoliday } from "./types";

const dateHolidays: DateHoliday[] = [
  { date: "01-01", name: "Año Nuevo", nextMonday: false },
  { date: "05-01", name: "Día del Trabajo", nextMonday: false },
  { date: "07-20", name: "Grito de la Independencia", nextMonday: false },
  { date: "08-07", name: "Batalla de Boyacá", nextMonday: false },
  { date: "12-08", name: "Inmaculada Concepción", nextMonday: false },
  { date: "12-25", name: "Navidad", nextMonday: false },
  { date: "01-06", name: "Reyes Magos", nextMonday: true },
  { date: "03-19", name: "San José", nextMonday: true },
  { date: "06-29", name: "San Pedro y San Pablo", nextMonday: true },
  { date: "08-15", name: "Asunción de la Virgen", nextMonday: true },
  { date: "10-12", name: "Día de la Raza", nextMonday: true },
  { date: "11-01", name: "Todos los Santos", nextMonday: true },
  { date: "11-11", name: "Independencia de Cartagena", nextMonday: true },
];

// We could simplify the calculation by setting the offset to match Monday.
// For example, the date for the 'Corpus Christi' is 60 days after Easter
// and that's the date it is celebrated in most countries. In Colombia,
// that date is moved to the next monday, hence, we use 60 for the offset
// and then get the next monday instead of directly using 64 as the offset.
// https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
const easterHolidays: EasterHoliday[] = [
  { offset: -3, name: "Jueves Santo", nextMonday: false },
  { offset: -2, name: "Viernes Santo", nextMonday: false },
  { offset: 39, name: "Ascensión del Señor", nextMonday: true },
  { offset: 60, name: "Corpus Christi", nextMonday: true },
  { offset: 68, name: "Sagrado Corazón de Jesús", nextMonday: true },
];

export default [...dateHolidays, ...easterHolidays];
