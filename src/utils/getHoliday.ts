import { ColombianHoliday, ColombianHolidayWithNativeDate } from "../types";
import { getHolidaysForYear } from "./getHolidaysByYear";
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
  const holiday = getHolidaysForYear(date.getUTCFullYear(), {
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
    date: holiday.date.toISOString().slice(0, 10),
    celebrationDate: holiday.celebrationDate.toISOString().slice(0, 10),
  };
}
