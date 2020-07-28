import colombianHolidays from './holidays';
import { ColombianHoliday } from './types';
import { getHoliday, isValidYear } from './helpers';

function getHolidays(
  year: number = new Date().getFullYear()
): ColombianHoliday[] {
  if (!isValidYear(year)) {
    throw new Error('The year should be between 1984 and 9999');
  }

  return colombianHolidays.map((holiday) => getHoliday(holiday, year));
}

export default getHolidays;
