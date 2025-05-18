import colombianHolidays from "..";
import type { ColombianHolidayWithNativeDate } from "../types";
import { isSameDate } from "./helpers";

const holidaysCache = new Map<number, ColombianHolidayWithNativeDate[]>();

export function isHoliday(date: Date): boolean {
  const year = date.getUTCFullYear();
  const cachedHolidays = holidaysCache.get(year);
  if (cachedHolidays) {
    return cachedHolidays.some(({ celebrationDate }) =>
      isSameDate(celebrationDate, date)
    );
  }
  const holidays = colombianHolidays({
    year,
    valueAsDate: true,
  });
  holidaysCache.set(year, holidays);
  return holidays.some(({ celebrationDate }) =>
    isSameDate(celebrationDate, date)
  );
}
