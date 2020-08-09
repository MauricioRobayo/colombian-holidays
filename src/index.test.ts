import colombianHolidays, { FIRST_HOLIDAY_YEAR, LAST_HOLIDAY_YEAR } from '.';
import { ColombianHoliday } from './types';

describe('Gets all holidays for a given year', () => {
  const holidaysYears: Record<number, ColombianHoliday[]> = {
    2015: [
      {
        date: '2015-01-01',
        celebrationDate: '2015-01-01',
        name: 'Año Nuevo',
        type: 'FixDate',
      },
      {
        date: '2015-05-01',
        celebrationDate: '2015-05-01',
        name: 'Día del Trabajo',
        type: 'FixDate',
      },
      {
        date: '2015-07-20',
        celebrationDate: '2015-07-20',
        name: 'Grito de la Independencia',
        type: 'FixDate',
      },
      {
        date: '2015-08-07',
        celebrationDate: '2015-08-07',
        name: 'Batalla de Boyacá',
        type: 'FixDate',
      },
      {
        date: '2015-12-08',
        celebrationDate: '2015-12-08',
        name: 'Inmaculada Concepción',
        type: 'FixDate',
      },
      {
        date: '2015-12-25',
        celebrationDate: '2015-12-25',
        name: 'Navidad',
        type: 'FixDate',
      },
      {
        date: '2015-01-06',
        celebrationDate: '2015-01-12',
        name: 'Reyes Magos',
        type: 'NextMonday',
      },
      {
        date: '2015-03-19',
        celebrationDate: '2015-03-23',
        name: 'San José',
        type: 'NextMonday',
      },
      {
        date: '2015-06-29',
        celebrationDate: '2015-06-29',
        name: 'San Pedro y San Pablo',
        type: 'NextMonday',
      },
      {
        date: '2015-08-15',
        celebrationDate: '2015-08-17',
        name: 'Asunción de la Virgen',
        type: 'NextMonday',
      },
      {
        date: '2015-10-12',
        celebrationDate: '2015-10-12',
        name: 'Día de la Raza',
        type: 'NextMonday',
      },
      {
        date: '2015-11-01',
        celebrationDate: '2015-11-02',
        name: 'Todos los Santos',
        type: 'NextMonday',
      },
      {
        date: '2015-11-11',
        celebrationDate: '2015-11-16',
        name: 'Independencia de Cartagena',
        type: 'NextMonday',
      },
      {
        date: '2015-04-02',
        celebrationDate: '2015-04-02',
        name: 'Jueves Santo',
        type: 'RelativeToEaster',
      },
      {
        date: '2015-04-03',
        celebrationDate: '2015-04-03',
        name: 'Viernes Santo',
        type: 'RelativeToEaster',
      },
      {
        date: '2015-05-18',
        celebrationDate: '2015-05-18',
        name: 'Ascensión del Señor',
        type: 'RelativeToEaster',
      },
      {
        date: '2015-06-08',
        celebrationDate: '2015-06-08',
        name: 'Corpus Christi',
        type: 'RelativeToEaster',
      },
      {
        date: '2015-06-15',
        celebrationDate: '2015-06-15',
        name: 'Sagrado Corazón de Jesús',
        type: 'RelativeToEaster',
      },
    ],
    2018: [
      {
        date: '2018-01-01',
        celebrationDate: '2018-01-01',
        name: 'Año Nuevo',
        type: 'FixDate',
      },
      {
        date: '2018-05-01',
        celebrationDate: '2018-05-01',
        name: 'Día del Trabajo',
        type: 'FixDate',
      },
      {
        date: '2018-07-20',
        celebrationDate: '2018-07-20',
        name: 'Grito de la Independencia',
        type: 'FixDate',
      },
      {
        date: '2018-08-07',
        celebrationDate: '2018-08-07',
        name: 'Batalla de Boyacá',
        type: 'FixDate',
      },
      {
        date: '2018-12-08',
        celebrationDate: '2018-12-08',
        name: 'Inmaculada Concepción',
        type: 'FixDate',
      },
      {
        date: '2018-12-25',
        celebrationDate: '2018-12-25',
        name: 'Navidad',
        type: 'FixDate',
      },
      {
        date: '2018-01-06',
        celebrationDate: '2018-01-08',
        name: 'Reyes Magos',
        type: 'NextMonday',
      },
      {
        date: '2018-03-19',
        celebrationDate: '2018-03-19',
        name: 'San José',
        type: 'NextMonday',
      },
      {
        date: '2018-06-29',
        celebrationDate: '2018-07-02',
        name: 'San Pedro y San Pablo',
        type: 'NextMonday',
      },
      {
        date: '2018-08-15',
        celebrationDate: '2018-08-20',
        name: 'Asunción de la Virgen',
        type: 'NextMonday',
      },
      {
        date: '2018-10-12',
        celebrationDate: '2018-10-15',
        name: 'Día de la Raza',
        type: 'NextMonday',
      },
      {
        date: '2018-11-01',
        celebrationDate: '2018-11-05',
        name: 'Todos los Santos',
        type: 'NextMonday',
      },
      {
        date: '2018-11-11',
        celebrationDate: '2018-11-12',
        name: 'Independencia de Cartagena',
        type: 'NextMonday',
      },
      {
        date: '2018-03-29',
        celebrationDate: '2018-03-29',
        name: 'Jueves Santo',
        type: 'RelativeToEaster',
      },
      {
        date: '2018-03-30',
        celebrationDate: '2018-03-30',
        name: 'Viernes Santo',
        type: 'RelativeToEaster',
      },
      {
        date: '2018-05-14',
        celebrationDate: '2018-05-14',
        name: 'Ascensión del Señor',
        type: 'RelativeToEaster',
      },
      {
        date: '2018-06-04',
        celebrationDate: '2018-06-04',
        name: 'Corpus Christi',
        type: 'RelativeToEaster',
      },
      {
        date: '2018-06-11',
        celebrationDate: '2018-06-11',
        name: 'Sagrado Corazón de Jesús',
        type: 'RelativeToEaster',
      },
    ],
  };
  Object.keys(holidaysYears).forEach((holidaysYear) => {
    it(`Should return holidays for ${holidaysYear}`, () => {
      const year = Number(holidaysYear);
      expect(colombianHolidays(year)).toEqual(holidaysYears[year]);
    });
  });
  it('Should return holidays for the current year when no year given', () => {
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
