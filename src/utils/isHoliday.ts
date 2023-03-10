import colombianHolidays from "..";
import { isSameDate } from "./helpers";

export function isHoliday(date: Date): boolean {
  return colombianHolidays({
    year: date.getUTCFullYear(),
    valueAsDate: true,
  }).some(({ celebrationDate }) => isSameDate(celebrationDate, date));
}
