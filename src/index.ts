import colombianHolidays from './holidays';
import { ColombianHoliday } from './types';
import getHoliday from './helpers';

// 1984 is the year when the current holidays scheme is enforced
// http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
export const firstYear = 1984;
// The pascua package calculates Easter until 4099.
export const lastYear = 4099;

export default (
  year: number = new Date().getFullYear()
): ColombianHoliday[] => {
  if (year < firstYear || year > lastYear) {
    throw new Error(`The year should be between ${firstYear} and ${lastYear}`);
  }

  return colombianHolidays.map((holiday) => getHoliday(holiday, year));
};
