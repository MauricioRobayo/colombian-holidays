import { Holiday, Easter, Months } from './types';

// prettier-ignore
const holidays: (Holiday | Easter)[] = [
  { type: 'FixedDate', name: 'Año Nuevo', day: 1, month: Months.January },
  { type: 'FixedDate', name: 'Día del Trabajo', day: 1, month: Months.May },
  { type: 'FixedDate', name: 'Grito de la Independencia', day: 20, month: Months.July },
  { type: 'FixedDate', name: 'Batalla de Boyacá', day: 7, month: Months.August },
  { type: 'FixedDate', name: 'Inmaculada Concepción', day: 8, month: Months.December },
  { type: 'FixedDate', name: 'Navidad', day: 25, month: Months.December },
  { type: 'NextMonday', name: 'Reyes Magos', day: 6, month: Months.January },
  { type: 'NextMonday', name: 'San José', day: 19, month: Months.March },
  { type: 'NextMonday', name: 'San Pedro y San Pablo', day: 29, month: Months.June },
  { type: 'NextMonday', name: 'Asunción de la Virgen', day: 15, month: Months.August },
  { type: 'NextMonday', name: 'Día de la Raza', day: 12, month: Months.October },
  { type: 'NextMonday', name: 'Todos los Santos', day: 1, month: Months.November },
  { type: 'NextMonday', name: 'Independencia de Cartagena', day: 11, month: Months.November },
  { type: 'RelativeToEaster', name: 'Jueves Santo', offset: -3 },
  { type: 'RelativeToEaster', name: 'Viernes Santo', offset: -2 },
  { type: 'RelativeToEaster', name: 'Ascensión de Jesús', offset: 43 },
  { type: 'RelativeToEaster', name: 'Corpus Christi', offset: 64 },
  { type: 'RelativeToEaster', name: 'Sagrado Corazón de Jesús', offset: 71 },
];

export default holidays;
