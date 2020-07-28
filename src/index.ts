import { holidays } from './holidays'
import { ColombianHoliday } from './types'
import { getHoliday, isValidYear } from './helpers'

export default function (year: number = new Date().getFullYear()): ColombianHoliday[] {
  if (!isValidYear(year)) {
    throw new Error('The year should be between 1984 and 9999');
  }

  return holidays.map((holiday) => getHoliday(holiday, year));
}
