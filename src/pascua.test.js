const { getAllHolidays, getHoliday } = require('./pascua')

const times = ['00:00', '12:00', '23:59']

describe('get the name of a given holiday date', () => {
  const holidayCases = [
    { date: '2017/04/12', name: '' },
    { date: '2017/04/13', name: 'Jueves Santo' },
    { date: '2014/04/18', name: 'Viernes Santo' },
    { date: '2017/05/29', name: 'Ascensión de Jesús' },
    { date: '2010/05/17', name: 'Ascensión de Jesús' },
    { date: '2011/06/27', name: 'Corpus Christi' },
    { date: '2016/06/06', name: 'Sagrado Corazón de Jesús' },
    { date: '2017/04/15', name: '' },
    { date: '1986/01/01', name: 'Año Nuevo' },
    { date: '1984/12/31', name: '' },
    { date: '2013/01/07', name: 'Reyes Magos' },
    { date: '2018/01/08', name: 'Reyes Magos' },
    { date: '2025/12/25', name: 'Navidad' },
    { date: '1987/12/24', name: '' },
    { date: '2017/03/13', name: '' },
    { date: '2017/01/09', name: 'Reyes Magos' },
    { date: '2014/01/06', name: 'Reyes Magos' },
    { date: '2011/08/15', name: 'Asunción de la Virgen' },
    { date: '2013/11/11', name: 'Independencia de Cartagena' },
    { date: '2018/11/05', name: 'Todos los Santos' },
    { date: '2013/10/14', name: 'Día de la Raza' },
    { date: '2015/10/12', name: 'Día de la Raza' },
    { date: '2010/10/18', name: 'Día de la Raza' },
  ]
  holidayCases.forEach(holiday => {
    times.forEach(time => {
      const datetime = `${holiday.date} ${time}`
      it(`should return '${holiday.name}' for ${datetime}`, () => {
        const date = new Date(datetime)
        expect(getHoliday(date)).toBe(holiday.name)
      })
    })
    it(`should return the info for the current day when no date given`, () => {
      const currDate = new Date()
      expect(getHoliday()).toBe(getHoliday(currDate))
    })
  })
})

describe('Gets all holidays for a given year', () => {
  const holidaysYears = {
    2010: [
      { date: '2010-01-01', type: 1, name: 'Año Nuevo' },
      { date: '2010-05-01', type: 1, name: 'Día del Trabajo' },
      { date: '2010-07-20', type: 1, name: 'Grito de la Independencia' },
      { date: '2010-08-07', type: 1, name: 'Batalla de Boyacá' },
      { date: '2010-12-08', type: 1, name: 'Inmaculada Concepción' },
      { date: '2010-12-25', type: 1, name: 'Navidad' },
      { date: '2010-01-11', type: 2, name: 'Reyes Magos' },
      { date: '2010-03-22', type: 2, name: 'San José' },
      { date: '2010-07-05', type: 2, name: 'San Pedro y San Pablo' },
      { date: '2010-08-16', type: 2, name: 'Asunción de la Virgen' },
      { date: '2010-10-18', type: 2, name: 'Día de la Raza' },
      { date: '2010-11-01', type: 2, name: 'Todos los Santos' },
      { date: '2010-11-15', type: 2, name: 'Independencia de Cartagena' },
      { date: '2010-04-01', type: 3, name: 'Jueves Santo' },
      { date: '2010-04-02', type: 3, name: 'Viernes Santo' },
      { date: '2010-05-17', type: 3, name: 'Ascensión de Jesús' },
      { date: '2010-06-07', type: 3, name: 'Corpus Christi' },
      { date: '2010-06-14', type: 3, name: 'Sagrado Corazón de Jesús' },
    ],
    2012: [
      { date: '2012-01-01', type: 1, name: 'Año Nuevo' },
      { date: '2012-05-01', type: 1, name: 'Día del Trabajo' },
      { date: '2012-07-20', type: 1, name: 'Grito de la Independencia' },
      { date: '2012-08-07', type: 1, name: 'Batalla de Boyacá' },
      { date: '2012-12-08', type: 1, name: 'Inmaculada Concepción' },
      { date: '2012-12-25', type: 1, name: 'Navidad' },
      { date: '2012-01-09', type: 2, name: 'Reyes Magos' },
      { date: '2012-03-19', type: 2, name: 'San José' },
      { date: '2012-07-02', type: 2, name: 'San Pedro y San Pablo' },
      { date: '2012-08-20', type: 2, name: 'Asunción de la Virgen' },
      { date: '2012-10-15', type: 2, name: 'Día de la Raza' },
      { date: '2012-11-05', type: 2, name: 'Todos los Santos' },
      { date: '2012-11-12', type: 2, name: 'Independencia de Cartagena' },
      { date: '2012-04-05', type: 3, name: 'Jueves Santo' },
      { date: '2012-04-06', type: 3, name: 'Viernes Santo' },
      { date: '2012-05-21', type: 3, name: 'Ascensión de Jesús' },
      { date: '2012-06-11', type: 3, name: 'Corpus Christi' },
      { date: '2012-06-18', type: 3, name: 'Sagrado Corazón de Jesús' },
    ],
    2015: [
      { date: '2015-01-01', type: 1, name: 'Año Nuevo' },
      { date: '2015-05-01', type: 1, name: 'Día del Trabajo' },
      { date: '2015-07-20', type: 1, name: 'Grito de la Independencia' },
      { date: '2015-08-07', type: 1, name: 'Batalla de Boyacá' },
      { date: '2015-12-08', type: 1, name: 'Inmaculada Concepción' },
      { date: '2015-12-25', type: 1, name: 'Navidad' },
      { date: '2015-01-12', type: 2, name: 'Reyes Magos' },
      { date: '2015-03-23', type: 2, name: 'San José' },
      { date: '2015-06-29', type: 2, name: 'San Pedro y San Pablo' },
      { date: '2015-08-17', type: 2, name: 'Asunción de la Virgen' },
      { date: '2015-10-12', type: 2, name: 'Día de la Raza' },
      { date: '2015-11-02', type: 2, name: 'Todos los Santos' },
      { date: '2015-11-16', type: 2, name: 'Independencia de Cartagena' },
      { date: '2015-04-02', type: 3, name: 'Jueves Santo' },
      { date: '2015-04-03', type: 3, name: 'Viernes Santo' },
      { date: '2015-05-18', type: 3, name: 'Ascensión de Jesús' },
      { date: '2015-06-08', type: 3, name: 'Corpus Christi' },
      { date: '2015-06-15', type: 3, name: 'Sagrado Corazón de Jesús' },
    ],
    2018: [
      { date: '2018-01-01', type: 1, name: 'Año Nuevo' },
      { date: '2018-05-01', type: 1, name: 'Día del Trabajo' },
      { date: '2018-07-20', type: 1, name: 'Grito de la Independencia' },
      { date: '2018-08-07', type: 1, name: 'Batalla de Boyacá' },
      { date: '2018-12-08', type: 1, name: 'Inmaculada Concepción' },
      { date: '2018-12-25', type: 1, name: 'Navidad' },
      { date: '2018-01-08', type: 2, name: 'Reyes Magos' },
      { date: '2018-03-19', type: 2, name: 'San José' },
      { date: '2018-07-02', type: 2, name: 'San Pedro y San Pablo' },
      { date: '2018-08-20', type: 2, name: 'Asunción de la Virgen' },
      { date: '2018-10-15', type: 2, name: 'Día de la Raza' },
      { date: '2018-11-05', type: 2, name: 'Todos los Santos' },
      { date: '2018-11-12', type: 2, name: 'Independencia de Cartagena' },
      { date: '2018-03-29', type: 3, name: 'Jueves Santo' },
      { date: '2018-03-30', type: 3, name: 'Viernes Santo' },
      { date: '2018-05-14', type: 3, name: 'Ascensión de Jesús' },
      { date: '2018-06-04', type: 3, name: 'Corpus Christi' },
      { date: '2018-06-11', type: 3, name: 'Sagrado Corazón de Jesús' },
    ],
  }
  Object.keys(holidaysYears).forEach(holidaysYear => {
    it(`Should return holidays for ${holidaysYear}`, () => {
      expect(getAllHolidays(holidaysYear)).toEqual(holidaysYears[holidaysYear])
    })
  })
  it(`Should return holidays for the current year when no year given`, () => {
    const currYear = new Date().getFullYear()
    const currHols = getAllHolidays()
    expect(currHols).toEqual(getAllHolidays(currYear))
    expect(Array.isArray(currHols)).toBe(true)
    expect(currHols.length).toBe(18)
  })
})
describe('Should return error for an invalid date', () => {
  it('should return error for a date bellow year <= 1983', () => {
    expect(() => {
      getHoliday(new Date('1983-12-31'))
    }).toThrow('Invalid year. Should be an integer > 1983')
  })
  it('should return error for an invalid', () => {
    expect(() => {
      getHoliday('1983-12-31')
    }).toThrow('Invalid date.')
  })
})
describe('Should return error for a non valid year', () => {
  it('should return error for a non integer number <= 1983', () => {
    expect(() => {
      getAllHolidays(1983)
    }).toThrow('Invalid year. Should be an integer > 1983')
    expect(() => {
      getAllHolidays(19)
    }).toThrow('Invalid year. Should be an integer > 1983')
    expect(() => {
      getAllHolidays('')
    }).toThrow('Invalid year. Should be an integer > 1983')
    expect(() => {
      getAllHolidays([])
    }).toThrow('Invalid year. Should be an integer > 1983')
    expect(() => {
      getAllHolidays('asdf')
    }).toThrow('Invalid year. Should be an integer > 1983')
  })
})
