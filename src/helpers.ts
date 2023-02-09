import pascua from "pascua";
import type { Holiday, EasterHoliday, ColombianHoliday } from "./types";

// 1984 is the year when the current holidays scheme is enforced
// http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
export const NEW_HOLIDAY_SCHEMA_START_YEAR = 1984;

function getNextDayOfWeek(date: Date, dayOfWeek: number): Date {
  const resultDate = new Date(date);
  resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7));
  return resultDate;
}

function getNextMonday(date: Date): Date {
  const MONDAY = 1;
  return getNextDayOfWeek(date, MONDAY);
}

function isEasterHoliday(holiday: Holiday): holiday is EasterHoliday {
  return "offset" in holiday;
}

function getHolidayDate(holiday: Holiday, year: number): Date {
  if (isEasterHoliday(holiday)) {
    const { month, day } = pascua(year);
    return new Date(year, month - 1, day + holiday.offset);
  }

  const [month, day] = holiday.date.split("-");
  return new Date(year, Number(month) - 1, Number(day));
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getHoliday(holiday: Holiday, year: number): ColombianHoliday {
  const holidayDate = getHolidayDate(holiday, year);
  const celebrationDate =
    year >= NEW_HOLIDAY_SCHEMA_START_YEAR && holiday.nextMonday
      ? getNextMonday(holidayDate)
      : holidayDate;
  return {
    date: formatDate(holidayDate),
    celebrationDate: formatDate(celebrationDate),
    name: holiday.name,
    nextMonday: year >= NEW_HOLIDAY_SCHEMA_START_YEAR && holiday.nextMonday,
  };
}

export default getHoliday;
