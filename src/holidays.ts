import { Holiday, Easter } from './types';

// prettier-ignore
const holidays: (Holiday | Easter)[] = [
  { type: 'FixDate', name: 'Año Nuevo', day: 1, month: 1 },
  { type: 'FixDate', name: 'Día del Trabajo', day: 1, month: 5 },
  { type: 'FixDate', name: 'Grito de la Independencia', day: 20, month: 7 },
  { type: 'FixDate', name: 'Batalla de Boyacá', day: 7, month: 8 },
  { type: 'FixDate', name: 'Inmaculada Concepción', day: 8, month: 12 },
  { type: 'FixDate', name: 'Navidad', day: 25, month: 12 },
  { type: 'NextMonday', name: 'Reyes Magos', day: 6, month: 1 },
  { type: 'NextMonday', name: 'San José', day: 19, month: 3 },
  { type: 'NextMonday', name: 'San Pedro y San Pablo', day: 29, month: 6 },
  { type: 'NextMonday', name: 'Asunción de la Virgen', day: 15, month: 8 },
  { type: 'NextMonday', name: 'Día de la Raza', day: 12, month: 10 },
  { type: 'NextMonday', name: 'Todos los Santos', day: 1, month: 11 },
  { type: 'NextMonday', name: 'Independencia de Cartagena', day: 11, month: 11 },
  { type: 'RelativeToEaster', name: 'Jueves Santo', offset: -3 },
  { type: 'RelativeToEaster', name: 'Viernes Santo', offset: -2 },
  { type: 'RelativeToEaster', name: 'Ascensión de Jesús', offset: 43 },
  { type: 'RelativeToEaster', name: 'Corpus Christi', offset: 64 },
  { type: 'RelativeToEaster', name: 'Sagrado Corazón de Jesús', offset: 71 },
];

export default holidays;
