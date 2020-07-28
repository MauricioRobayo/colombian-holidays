import { Holiday, Easter, HolidayType, Months } from "./types";

export const holidays: (Holiday | Easter)[] = [
  {
    type: HolidayType.FixedDate,
    name: "Año Nuevo",
    day: 1,
    month: Months.January,
  },
  {
    type: HolidayType.FixedDate,
    name: "Día del Trabajo",
    day: 1,
    month: Months.May,
  },
  {
    type: HolidayType.FixedDate,
    name: "Grito de la Independencia",
    day: 20,
    month: Months.July,
  },
  {
    type: HolidayType.FixedDate,
    name: "Batalla de Boyacá",
    day: 7,
    month: Months.August,
  },
  {
    type: HolidayType.FixedDate,
    name: "Inmaculada Concepción",
    day: 8,
    month: Months.December,
  },
  {
    type: HolidayType.FixedDate,
    name: "Navidad",
    day: 25,
    month: Months.December,
  },
  {
    type: HolidayType.NextMonday,
    name: "Reyes Magos",
    day: 6,
    month: Months.January,
  },
  {
    type: HolidayType.NextMonday,
    name: "San José",
    day: 19,
    month: Months.March,
  },
  {
    type: HolidayType.NextMonday,
    name: "San Pedro y San Pablo",
    day: 29,
    month: Months.June,
  },
  {
    type: HolidayType.NextMonday,
    name: "Asunción de la Virgen",
    day: 15,
    month: Months.August,
  },
  {
    type: HolidayType.NextMonday,
    name: "Día de la Raza",
    day: 12,
    month: Months.October,
  },
  {
    type: HolidayType.NextMonday,
    name: "Todos los Santos",
    day: 1,
    month: Months.November,
  },
  {
    type: HolidayType.NextMonday,
    name: "Independencia de Cartagena",
    day: 11,
    month: Months.November,
  },
  { type: HolidayType.RelativeToEaster, name: "Jueves Santo", offset: -3 },
  { type: HolidayType.RelativeToEaster, name: "Viernes Santo", offset: -2 },
  {
    type: HolidayType.RelativeToEaster,
    name: "Ascensión de Jesús",
    offset: 43,
  },
  { type: HolidayType.RelativeToEaster, name: "Corpus Christi", offset: 64 },
  {
    type: HolidayType.RelativeToEaster,
    name: "Sagrado Corazón de Jesús",
    offset: 71,
  },
];
