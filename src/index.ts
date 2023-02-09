import getHoliday from "./helpers";
import holidays from "./holidays";
import { ColombianHoliday } from "./types";

// pascua package year limits
export const FIRST_HOLIDAY_YEAR = 1583;
export const LAST_HOLIDAY_YEAR = 4099;

function colombianHolidays(
  year: number = new Date().getFullYear()
): ColombianHoliday[] {
  if (year < FIRST_HOLIDAY_YEAR || year > LAST_HOLIDAY_YEAR) {
    throw new Error(
      `The year should be between ${FIRST_HOLIDAY_YEAR} and ${LAST_HOLIDAY_YEAR}`
    );
  }

  return holidays
    .map((holiday) => getHoliday(holiday, year))
    .sort((a, b) => a.celebrationDate.localeCompare(b.celebrationDate));
}

export default colombianHolidays;
