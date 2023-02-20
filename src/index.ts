import getHoliday from "./helpers";
import holidays from "./holidays";
import { ColombianHoliday, ColombianHolidayWithNativeDate } from "./types";

// pascua package year limits
export const FIRST_HOLIDAY_YEAR = 1583;
export const LAST_HOLIDAY_YEAR = 4099;

export function colombianHolidays(
  options?:
    | undefined
    | { year?: number; month?: number; returnNativeDate: false | undefined }
): ColombianHoliday[];
export function colombianHolidays(options?: {
  year?: number;
  month?: number;
  returnNativeDate: true;
}): ColombianHolidayWithNativeDate[];
export function colombianHolidays(options?: {
  year?: number;
  month?: number;
  returnNativeDate?: boolean;
}): ColombianHoliday[] | ColombianHolidayWithNativeDate[];
export function colombianHolidays({
  year = new Date().getUTCFullYear(),
  month,
  returnNativeDate = false,
}: {
  year?: number;
  month?: number;
  returnNativeDate?: boolean;
} = {}): unknown {
  if (year < FIRST_HOLIDAY_YEAR || year > LAST_HOLIDAY_YEAR) {
    throw new Error(
      `The year should be between ${FIRST_HOLIDAY_YEAR} and ${LAST_HOLIDAY_YEAR}`
    );
  }

  return holidays
    .map((holiday) => getHoliday(holiday, { year, returnNativeDate }))
    .filter((holiday) => {
      if (month === undefined) {
        return true;
      }

      if (typeof holiday.celebrationDate === "string") {
        return Number(holiday.celebrationDate.slice(5, 7)) === month;
      }

      return holiday.celebrationDate.getUTCMonth() === month;
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
