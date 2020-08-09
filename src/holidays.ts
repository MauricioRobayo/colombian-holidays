import { Holiday, EasterHoliday } from './types';

// https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
const holidays: Holiday[] = [
  { month: 1, day: 1, name: 'Año Nuevo', nextMonday: false },
  { month: 5, day: 1, name: 'Día del Trabajo', nextMonday: false },
  { month: 7, day: 20, name: 'Grito de la Independencia', nextMonday: false },
  { month: 8, day: 7, name: 'Batalla de Boyacá', nextMonday: false },
  { month: 12, day: 8, name: 'Inmaculada Concepción', nextMonday: false },
  { month: 12, day: 25, name: 'Navidad', nextMonday: false },
  { month: 1, day: 6, name: 'Reyes Magos', nextMonday: true },
  { month: 3, day: 19, name: 'San José', nextMonday: true },
  { month: 6, day: 29, name: 'San Pedro y San Pablo', nextMonday: true },
  { month: 8, day: 15, name: 'Asunción de la Virgen', nextMonday: true },
  { month: 10, day: 12, name: 'Día de la Raza', nextMonday: true },
  { month: 11, day: 1, name: 'Todos los Santos', nextMonday: true },
  { month: 11, day: 11, name: 'Independencia de Cartagena', nextMonday: true },
];

const easterHolidays: EasterHoliday[] = [
  { offset: -3, name: 'Jueves Santo', nextMonday: false },
  { offset: -2, name: 'Viernes Santo', nextMonday: false },
  { offset: 39, name: 'Ascensión del Señor', nextMonday: true },
  { offset: 60, name: 'Corpus Christi', nextMonday: true },
  { offset: 68, name: 'Sagrado Corazón de Jesús', nextMonday: true },
];

export default [...holidays, ...easterHolidays];
