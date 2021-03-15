import timezone_mock, { TimeZone } from 'timezone-mock';
import colombianHolidays, {
  FIRST_HOLIDAY_YEAR,
  isColombianHoliday,
  LAST_HOLIDAY_YEAR,
} from '.';
import { ColombianHoliday } from './types';

// prettier-ignore
const holidaysYears: Record<number, ColombianHoliday[]> = {
  2015: [
    { date: '2015-01-01', celebrationDate: '2015-01-01', name: 'Año Nuevo', nextMonday: false },
    { date: '2015-01-06', celebrationDate: '2015-01-12', name: 'Reyes Magos', nextMonday: true },
    { date: '2015-03-19', celebrationDate: '2015-03-23', name: 'San José', nextMonday: true },
    { date: '2015-04-02', celebrationDate: '2015-04-02', name: 'Jueves Santo', nextMonday: false },
    { date: '2015-04-03', celebrationDate: '2015-04-03', name: 'Viernes Santo', nextMonday: false },
    { date: '2015-05-01', celebrationDate: '2015-05-01', name: 'Día del Trabajo', nextMonday: false },
    { date: '2015-05-14', celebrationDate: '2015-05-18', name: 'Ascensión del Señor', nextMonday: true },
    { date: '2015-06-04', celebrationDate: '2015-06-08', name: 'Corpus Christi', nextMonday: true },
    { date: '2015-06-12', celebrationDate: '2015-06-15', name: 'Sagrado Corazón de Jesús', nextMonday: true },
    { date: '2015-06-29', celebrationDate: '2015-06-29', name: 'San Pedro y San Pablo', nextMonday: true },
    { date: '2015-07-20', celebrationDate: '2015-07-20', name: 'Grito de la Independencia', nextMonday: false },
    { date: '2015-08-07', celebrationDate: '2015-08-07', name: 'Batalla de Boyacá', nextMonday: false },
    { date: '2015-08-15', celebrationDate: '2015-08-17', name: 'Asunción de la Virgen', nextMonday: true },
    { date: '2015-10-12', celebrationDate: '2015-10-12', name: 'Día de la Raza', nextMonday: true },
    { date: '2015-11-01', celebrationDate: '2015-11-02', name: 'Todos los Santos', nextMonday: true },
    { date: '2015-11-11', celebrationDate: '2015-11-16', name: 'Independencia de Cartagena', nextMonday: true },
    { date: '2015-12-08', celebrationDate: '2015-12-08', name: 'Inmaculada Concepción', nextMonday: false },
    { date: '2015-12-25', celebrationDate: '2015-12-25', name: 'Navidad', nextMonday: false },
  ],
  2018: [
    { date: '2018-01-01', celebrationDate: '2018-01-01', name: 'Año Nuevo', nextMonday: false },
    { date: '2018-01-06', celebrationDate: '2018-01-08', name: 'Reyes Magos', nextMonday: true },
    { date: '2018-03-19', celebrationDate: '2018-03-19', name: 'San José', nextMonday: true },
    { date: '2018-03-29', celebrationDate: '2018-03-29', name: 'Jueves Santo', nextMonday: false },
    { date: '2018-03-30', celebrationDate: '2018-03-30', name: 'Viernes Santo', nextMonday: false },
    { date: '2018-05-01', celebrationDate: '2018-05-01', name: 'Día del Trabajo', nextMonday: false },
    { date: '2018-05-10', celebrationDate: '2018-05-14', name: 'Ascensión del Señor', nextMonday: true },
    { date: '2018-05-31', celebrationDate: '2018-06-04', name: 'Corpus Christi', nextMonday: true },
    { date: '2018-06-08', celebrationDate: '2018-06-11', name: 'Sagrado Corazón de Jesús', nextMonday: true },
    { date: '2018-06-29', celebrationDate: '2018-07-02', name: 'San Pedro y San Pablo', nextMonday: true },
    { date: '2018-07-20', celebrationDate: '2018-07-20', name: 'Grito de la Independencia', nextMonday: false },
    { date: '2018-08-07', celebrationDate: '2018-08-07', name: 'Batalla de Boyacá', nextMonday: false },
    { date: '2018-08-15', celebrationDate: '2018-08-20', name: 'Asunción de la Virgen', nextMonday: true },
    { date: '2018-10-12', celebrationDate: '2018-10-15', name: 'Día de la Raza', nextMonday: true },
    { date: '2018-11-01', celebrationDate: '2018-11-05', name: 'Todos los Santos', nextMonday: true },
    { date: '2018-11-11', celebrationDate: '2018-11-12', name: 'Independencia de Cartagena', nextMonday: true },
    { date: '2018-12-08', celebrationDate: '2018-12-08', name: 'Inmaculada Concepción', nextMonday: false },
    { date: '2018-12-25', celebrationDate: '2018-12-25', name: 'Navidad', nextMonday: false },
  ],
};
const timezones: TimeZone[] = [
  'US/Pacific',
  'US/Eastern',
  'Brazil/East',
  'UTC',
  'Europe/London',
  'Australia/Adelaide',
];

describe('Gets all holidays for a given year', () => {
  Object.keys(holidaysYears).forEach((holidaysYear) => {
    timezones.forEach((timezone) => {
      it(`Should return holidays for ${holidaysYear} in ${timezone}`, () => {
        timezone_mock.register(timezone);
        const year = Number(holidaysYear);
        expect(colombianHolidays(year)).toEqual(holidaysYears[year]);
        timezone_mock.unregister();
      });
    });
  });
});

describe('Gets all holidays for the current year', () => {
  it('Should return holidays for the current year when no year is given', () => {
    const currYear = new Date().getFullYear();
    const currHols = colombianHolidays();
    const holidaysInAYear = 18;
    expect(currHols).toEqual(colombianHolidays(currYear));
    expect(Array.isArray(currHols)).toBe(true);
    expect(currHols.length).toBe(holidaysInAYear);
  });
});

describe('Should throw an error for a non valid year', () => {
  it(`should throw an error for a year below ${FIRST_HOLIDAY_YEAR}`, () => {
    expect(() => colombianHolidays(FIRST_HOLIDAY_YEAR)).not.toThrow();
    expect(() => colombianHolidays(FIRST_HOLIDAY_YEAR - 1)).toThrow();
  });
  it(`should throw an error for a year above ${LAST_HOLIDAY_YEAR}`, () => {
    expect(() => colombianHolidays(LAST_HOLIDAY_YEAR)).not.toThrow();
    expect(() => colombianHolidays(LAST_HOLIDAY_YEAR + 1)).toThrow();
  });
});

describe('isColombianHoliday', () => {
  const holidays = ['2003-06-23', '2012-10-15', '2017-05-29', '2021-03-22'];
  describe.each(holidays)('is holiday %p', (holiday) => {
    it.each(timezones)('%p', (timezone) => {
      timezone_mock.register(timezone);
      const date = new Date(holiday);
      expect(isColombianHoliday(date)).toBe(true);
    });
  });
});
