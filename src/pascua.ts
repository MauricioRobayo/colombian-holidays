import getPascuaDate from './butcher'
import { holidays, isEasterHoliday } from './holidays'
import { Holiday, Easter, HolidayType, ReturnedHoliday } from './types'

enum DaysOfTheWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isValidYear(year: number): boolean {
  // 1984 is the year when the current holidays scheme is enforced
  // http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
  return year >= 1984 && year < 9999
}

function addDays(date: Date, amount: number): Date {
  const resultDate = new Date(date.getTime());
  resultDate.setDate(resultDate.getDate() + amount);
  return resultDate;
}

function getNextDayOfWeek(date: Date, dayOfWeek: DaysOfTheWeek): Date {
  const resultDate = new Date(date.getTime());
  resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7));
  return resultDate;
}

function getNextMonday(date: Date): Date {
  return getNextDayOfWeek(date, DaysOfTheWeek.Monday)
}

function getHolidayDate(holiday: Holiday | Easter, year: number): Date {
  if (isEasterHoliday(holiday)) {
    return addDays(getPascuaDate(year), holiday.offset);
  }
  
  let date = new Date(year, holiday.month - 1, holiday.day);
  if (holiday.type === HolidayType.NextMonday) {
    return getNextMonday(date);
  }
  
  return date;
}

export function getHolidays(year: number = new Date().getFullYear()): ReturnedHoliday[] {
  if (!isValidYear(year)) {
    throw new Error('The year should be between 1984 and 9999');
  }

  return holidays.map(holiday => ({
    date: getHolidayDate(holiday, year)
      .toISOString()
      .substring(0, 10),
    type: holiday.type,
    name: holiday.name,
  }));
}
