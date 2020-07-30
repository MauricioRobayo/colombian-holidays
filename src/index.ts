import colombianHolidays from './holidays';
import { ColombianHoliday } from './types';
import getHoliday from './helpers';

// 1984 is the year when the current holidays scheme is enforced
// http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
export const firstHolidayYear = 1984;

// The pascua package calculates Easter until 4099.
export const lastHolidayYear = 4099;

export default (
  year: number = new Date().getFullYear()
): ColombianHoliday[] => {
  if (year < firstHolidayYear || year > lastHolidayYear) {
    throw new Error(
      `The year should be between ${firstHolidayYear} and ${lastHolidayYear}`
    );
  }

  return colombianHolidays.map((holiday) => getHoliday(holiday, year));
};
