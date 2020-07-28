import { getHolidays } from '.';
import { ReturnedHoliday } from './types';

describe('Gets all holidays for a given year', () => {
  const holidaysYears: Record<number, ReturnedHoliday[]>  = {
    2010: [
      { date: '2010-01-01', type: 0, name: 'Año Nuevo' },
      { date: '2010-05-01', type: 0, name: 'Día del Trabajo' },
      { date: '2010-07-20', type: 0, name: 'Grito de la Independencia' },
      { date: '2010-08-07', type: 0, name: 'Batalla de Boyacá' },
      { date: '2010-12-08', type: 0, name: 'Inmaculada Concepción' },
      { date: '2010-12-25', type: 0, name: 'Navidad' },
      { date: '2010-01-11', type: 1, name: 'Reyes Magos' },
      { date: '2010-03-22', type: 1, name: 'San José' },
      { date: '2010-07-05', type: 1, name: 'San Pedro y San Pablo' },
      { date: '2010-08-16', type: 1, name: 'Asunción de la Virgen' },
      { date: '2010-10-18', type: 1, name: 'Día de la Raza' },
      { date: '2010-11-01', type: 1, name: 'Todos los Santos' },
      { date: '2010-11-15', type: 1, name: 'Independencia de Cartagena' },
      { date: '2010-04-01', type: 2, name: 'Jueves Santo' },
      { date: '2010-04-02', type: 2, name: 'Viernes Santo' },
      { date: '2010-05-17', type: 2, name: 'Ascensión de Jesús' },
      { date: '2010-06-07', type: 2, name: 'Corpus Christi' },
      { date: '2010-06-14', type: 2, name: 'Sagrado Corazón de Jesús' },
    ],
    2012: [
      { date: '2012-01-01', type: 0, name: 'Año Nuevo' },
      { date: '2012-05-01', type: 0, name: 'Día del Trabajo' },
      { date: '2012-07-20', type: 0, name: 'Grito de la Independencia' },
      { date: '2012-08-07', type: 0, name: 'Batalla de Boyacá' },
      { date: '2012-12-08', type: 0, name: 'Inmaculada Concepción' },
      { date: '2012-12-25', type: 0, name: 'Navidad' },
      { date: '2012-01-09', type: 1, name: 'Reyes Magos' },
      { date: '2012-03-19', type: 1, name: 'San José' },
      { date: '2012-07-02', type: 1, name: 'San Pedro y San Pablo' },
      { date: '2012-08-20', type: 1, name: 'Asunción de la Virgen' },
      { date: '2012-10-15', type: 1, name: 'Día de la Raza' },
      { date: '2012-11-05', type: 1, name: 'Todos los Santos' },
      { date: '2012-11-12', type: 1, name: 'Independencia de Cartagena' },
      { date: '2012-04-05', type: 2, name: 'Jueves Santo' },
      { date: '2012-04-06', type: 2, name: 'Viernes Santo' },
      { date: '2012-05-21', type: 2, name: 'Ascensión de Jesús' },
      { date: '2012-06-11', type: 2, name: 'Corpus Christi' },
      { date: '2012-06-18', type: 2, name: 'Sagrado Corazón de Jesús' },
    ],
    2015: [
      { date: '2015-01-01', type: 0, name: 'Año Nuevo' },
      { date: '2015-05-01', type: 0, name: 'Día del Trabajo' },
      { date: '2015-07-20', type: 0, name: 'Grito de la Independencia' },
      { date: '2015-08-07', type: 0, name: 'Batalla de Boyacá' },
      { date: '2015-12-08', type: 0, name: 'Inmaculada Concepción' },
      { date: '2015-12-25', type: 0, name: 'Navidad' },
      { date: '2015-01-12', type: 1, name: 'Reyes Magos' },
      { date: '2015-03-23', type: 1, name: 'San José' },
      { date: '2015-06-29', type: 1, name: 'San Pedro y San Pablo' },
      { date: '2015-08-17', type: 1, name: 'Asunción de la Virgen' },
      { date: '2015-10-12', type: 1, name: 'Día de la Raza' },
      { date: '2015-11-02', type: 1, name: 'Todos los Santos' },
      { date: '2015-11-16', type: 1, name: 'Independencia de Cartagena' },
      { date: '2015-04-02', type: 2, name: 'Jueves Santo' },
      { date: '2015-04-03', type: 2, name: 'Viernes Santo' },
      { date: '2015-05-18', type: 2, name: 'Ascensión de Jesús' },
      { date: '2015-06-08', type: 2, name: 'Corpus Christi' },
      { date: '2015-06-15', type: 2, name: 'Sagrado Corazón de Jesús' },
    ],
    2018: [
      { date: '2018-01-01', type: 0, name: 'Año Nuevo' },
      { date: '2018-05-01', type: 0, name: 'Día del Trabajo' },
      { date: '2018-07-20', type: 0, name: 'Grito de la Independencia' },
      { date: '2018-08-07', type: 0, name: 'Batalla de Boyacá' },
      { date: '2018-12-08', type: 0, name: 'Inmaculada Concepción' },
      { date: '2018-12-25', type: 0, name: 'Navidad' },
      { date: '2018-01-08', type: 1, name: 'Reyes Magos' },
      { date: '2018-03-19', type: 1, name: 'San José' },
      { date: '2018-07-02', type: 1, name: 'San Pedro y San Pablo' },
      { date: '2018-08-20', type: 1, name: 'Asunción de la Virgen' },
      { date: '2018-10-15', type: 1, name: 'Día de la Raza' },
      { date: '2018-11-05', type: 1, name: 'Todos los Santos' },
      { date: '2018-11-12', type: 1, name: 'Independencia de Cartagena' },
      { date: '2018-03-29', type: 2, name: 'Jueves Santo' },
      { date: '2018-03-30', type: 2, name: 'Viernes Santo' },
      { date: '2018-05-14', type: 2, name: 'Ascensión de Jesús' },
      { date: '2018-06-04', type: 2, name: 'Corpus Christi' },
      { date: '2018-06-11', type: 2, name: 'Sagrado Corazón de Jesús' },
    ],
  };
  Object.keys(holidaysYears).forEach(holidaysYear => {
    it(`Should return holidays for ${holidaysYear}`, () => {
      const year = Number(holidaysYear)
      expect(getHolidays(year)).toEqual(holidaysYears[year]);
    });
  });
  it('Should return holidays for the current year when no year given', () => {
    const currYear = new Date().getFullYear();
    const currHols = getHolidays();
    expect(currHols).toEqual(getHolidays(currYear));
    expect(Array.isArray(currHols)).toBe(true);
    expect(currHols.length).toBe(18);
  });
});

describe('Should return error for a non valid year', () => {
  it('should throw an error for a year below 1984', () => {
    expect(() => {
      getHolidays(1983);
    }).toThrow('The year should be between 1984 and 9999');
  });
  it('should throw an error for a year above 9999', () => {
    expect(() => {
      getHolidays(10000);
    }).toThrow('The year should be between 1984 and 9999');
  });
});
