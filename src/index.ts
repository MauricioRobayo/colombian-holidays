import getHoliday from "./helpers";
import holidays from "./holidays";
import { ColombianHoliday, ColombianHolidayWithNativeDate } from "./types";

// pascua package year limits
export const FIRST_HOLIDAY_YEAR = 1583;
export const LAST_HOLIDAY_YEAR = 4099;

type MonthNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Month = MonthNumbers | Omit<number, MonthNumbers>;

export function colombianHolidays(
  options?:
    | undefined
    | { year?: number; month?: Month; valueAsDate: false | undefined }
): ColombianHoliday[];
export function colombianHolidays(options?: {
  year?: number;
  month?: Month;
  valueAsDate: true;
}): ColombianHolidayWithNativeDate[];
export function colombianHolidays(options?: {
  year?: number;
  month?: Month;
  valueAsDate?: boolean;
}): ColombianHoliday[] | ColombianHolidayWithNativeDate[];
export function colombianHolidays({
  year = new Date().getUTCFullYear(),
  month,
  valueAsDate = false,
}: {
  year?: number;
  month?: Month;
  valueAsDate?: boolean;
} = {}): unknown {
  if (year < FIRST_HOLIDAY_YEAR || year > LAST_HOLIDAY_YEAR) {
    throw new Error(
      `The year should be between ${FIRST_HOLIDAY_YEAR} and ${LAST_HOLIDAY_YEAR}`
    );
  }

  return holidays
    .map((holiday) => getHoliday(holiday, { year, valueAsDate }))
    .filter((holiday) => {
      if (month === undefined) {
        return true;
      }

      if (typeof holiday.celebrationDate === "string") {
        return Number(holiday.celebrationDate.slice(5, 7)) === month;
      }

      return holiday.celebrationDate.getUTCMonth() + 1 === month;
    })
    .sort((a, b) => {
      if (
        a.celebrationDate instanceof Date &&
        b.celebrationDate instanceof Date
      ) {
        return a.celebrationDate.getTime() - b.celebrationDate.getTime();
      }

      if (
        typeof a.celebrationDate === "string" &&
        typeof b.celebrationDate === "string"
      ) {
        return a.celebrationDate.localeCompare(b.celebrationDate);
      }

      throw new Error("Invariant violation: this state is not possible.");
    });
}

export default colombianHolidays;

export { getHolidaysForYear } from "./utils/getHolidaysByYear";
export { isHoliday } from "./utils/isHoliday";
export { holidaysWithinInterval } from "./utils/holidaysWithinInterval";
