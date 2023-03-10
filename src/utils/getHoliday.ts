import colombianHolidays from "..";
import { generateUtcStringFromDate } from "../helpers";
import { ColombianHoliday, ColombianHolidayWithNativeDate } from "../types";
import { isSameDate } from "./helpers";

export function getHoliday(
  date: Date,
  options: { valueAsDate: true }
): ColombianHolidayWithNativeDate | null;
export function getHoliday(
  date: Date,
  options?: undefined | { valueAsDate: false }
): ColombianHoliday | null;
export function getHoliday(
  date: Date,
  options: { valueAsDate: boolean } = { valueAsDate: false }
): ColombianHoliday | ColombianHolidayWithNativeDate | null {
  const { valueAsDate } = options;
  const holiday = colombianHolidays({
    year: date.getUTCFullYear(),
    valueAsDate: true,
  }).find(({ celebrationDate }) => isSameDate(celebrationDate, date));
  if (!holiday) {
    return null;
  }

  if (valueAsDate) {
    return holiday;
  }
  return {
    ...holiday,
    date: generateUtcStringFromDate(holiday.date),
    celebrationDate: generateUtcStringFromDate(holiday.celebrationDate),
  };
}
