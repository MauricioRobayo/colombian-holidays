import getHoliday from "./helpers";
import holidays from "./holidays";
import { ColombianHoliday, ColombianHolidayWithNativeDate } from "./types";

// pascua package year limits
export const FIRST_HOLIDAY_YEAR = 1583;
export const LAST_HOLIDAY_YEAR = 4099;

function colombianHolidays(
  year?: number,
  options?: undefined | { returnNativeDate?: false | undefined }
): ColombianHoliday[];
function colombianHolidays(
  year?: number,
  options?: { returnNativeDate?: true }
): ColombianHolidayWithNativeDate[];
function colombianHolidays(
  year?: number,
  options?: { returnNativeDate?: boolean }
): ColombianHoliday[] | ColombianHolidayWithNativeDate[];
function colombianHolidays(
  year: number = new Date().getFullYear(),
  { returnNativeDate = false }: { returnNativeDate?: boolean } = {}
): unknown[] {
  if (year < FIRST_HOLIDAY_YEAR || year > LAST_HOLIDAY_YEAR) {
    throw new Error(
      `The year should be between ${FIRST_HOLIDAY_YEAR} and ${LAST_HOLIDAY_YEAR}`
    );
  }

  return holidays
    .map((holiday) => getHoliday(holiday, year, { returnNativeDate }))
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
