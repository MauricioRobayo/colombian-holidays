import getHoliday from "./helpers";
import holidays from "./holidays";
import { ColombianHoliday } from "./types";

// 1984 is the year when the current holidays scheme is enforced
// http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
export const FIRST_HOLIDAY_YEAR = 1984;

// The pascua package calculates Easter until 4099.
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
