import pascua from 'pascua';
import { Holiday, Easter, ColombianHoliday } from './types';

function getNextDayOfWeek(date: Date, dayOfWeek: number): Date {
  const resultDate = new Date(date);
  resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7));
  return resultDate;
}

function getNextMonday(date: Date): Date {
  const MONDAY = 1;
  return getNextDayOfWeek(date, MONDAY);
}

function isEasterHoliday(holiday: Holiday | Easter): holiday is Easter {
  return 'offset' in holiday;
}

function getHolidayDate(holiday: Holiday | Easter, year: number): Date {
  if (isEasterHoliday(holiday)) {
    const { month, day } = pascua(year);
    return new Date(year, month - 1, day + holiday.offset);
  }

  return new Date(year, holiday.month - 1, holiday.day);
}

function addZero(n: number): string {
  return String(n).padStart(2, '0');
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  return `${year}-${month}-${day}`;
}

function getHoliday(holiday: Holiday | Easter, year: number): ColombianHoliday {
  const holidayDate = getHolidayDate(holiday, year);
  const celebrationDate =
    holiday.type === 'NextMonday' ? getNextMonday(holidayDate) : holidayDate;

  return {
    date: formatDate(holidayDate),
    celebrationDate: formatDate(celebrationDate),
    name: holiday.name,
  };
}

export default getHoliday;
