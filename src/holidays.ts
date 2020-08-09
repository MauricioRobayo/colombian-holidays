import { Holiday, Easter } from './types';

// https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
const holidays: (Holiday | Easter)[] = [
  { nextMonday: false, name: 'Año Nuevo', day: 1, month: 1 },
  { nextMonday: false, name: 'Día del Trabajo', day: 1, month: 5 },
  { nextMonday: false, name: 'Grito de la Independencia', day: 20, month: 7 },
  { nextMonday: false, name: 'Batalla de Boyacá', day: 7, month: 8 },
  { nextMonday: false, name: 'Inmaculada Concepción', day: 8, month: 12 },
  { nextMonday: false, name: 'Navidad', day: 25, month: 12 },
  { nextMonday: true, name: 'Reyes Magos', day: 6, month: 1 },
  { nextMonday: true, name: 'San José', day: 19, month: 3 },
  { nextMonday: true, name: 'San Pedro y San Pablo', day: 29, month: 6 },
  { nextMonday: true, name: 'Asunción de la Virgen', day: 15, month: 8 },
  { nextMonday: true, name: 'Día de la Raza', day: 12, month: 10 },
  { nextMonday: true, name: 'Todos los Santos', day: 1, month: 11 },
  { nextMonday: true, name: 'Independencia de Cartagena', day: 11, month: 11 },
  { nextMonday: false, name: 'Jueves Santo', offset: -3 },
  { nextMonday: false, name: 'Viernes Santo', offset: -2 },
  { nextMonday: true, name: 'Ascensión del Señor', offset: 39 },
  { nextMonday: true, name: 'Corpus Christi', offset: 60 },
  { nextMonday: true, name: 'Sagrado Corazón de Jesús', offset: 68 },
];

export default holidays;
