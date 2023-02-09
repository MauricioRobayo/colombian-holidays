import pascua from "pascua";
import type {
  Holiday,
  EasterHoliday,
  ColombianHoliday,
  ColombianHolidayWithDates,
} from "./types";

// 1984 is the year when the current holidays scheme is enforced
// http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
export const NEW_HOLIDAY_SCHEMA_START_YEAR = 1984;

function getNextDayOfWeek(date: Date, dayOfWeek: number): Date {
  const resultDate = new Date(date);
  resultDate.setUTCDate(
    date.getUTCDate() + ((7 + dayOfWeek - date.getUTCDay()) % 7)
  );
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
    const date = new Date(`${year}-${String(month).padStart(2, "0")}-01`);
    date.setUTCDate(day + holiday.offset);
    return date;
  }

  const [month, day] = holiday.date.split("-");
  return new Date(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`);
}

function formatDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function getHoliday(
  holiday: Holiday,
  year: number,
  returnNativeDate?: true | undefined
): ColombianHolidayWithDates;
function getHoliday(
  holiday: Holiday,
  year: number,
  returnNativeDate?: false
): ColombianHoliday;
function getHoliday(
  holiday: Holiday,
  year: number,
  returnNativeDate?: boolean
): ColombianHoliday | ColombianHolidayWithDates;
function getHoliday(
  holiday: Holiday,
  year: number,
  returnNativeDate?: boolean
): unknown {
  const holidayDate = getHolidayDate(holiday, year);
  const celebrationDate =
    year >= NEW_HOLIDAY_SCHEMA_START_YEAR && holiday.nextMonday
      ? getNextMonday(holidayDate)
      : holidayDate;

  return {
    date: returnNativeDate ? holidayDate : formatDate(holidayDate),
    celebrationDate: returnNativeDate
      ? celebrationDate
      : formatDate(celebrationDate),
    name: holiday.name,
    nextMonday: year >= NEW_HOLIDAY_SCHEMA_START_YEAR && holiday.nextMonday,
  };
}

export default getHoliday;
