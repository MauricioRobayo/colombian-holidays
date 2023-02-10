import colombianHolidays from "..";
import { ColombianHoliday, ColombianHolidayWithNativeDate } from "../types";

export function holidaysWithinInterval(options: {
  start: Date;
  end: Date;
  returnNativeDate?: false;
}): ColombianHoliday[];
export function holidaysWithinInterval(options: {
  start: Date;
  end: Date;
  returnNativeDate?: true;
}): ColombianHolidayWithNativeDate[];
export function holidaysWithinInterval(options: {
  start: Date;
  end: Date;
  returnNativeDate?: boolean;
}): ColombianHoliday[] | ColombianHolidayWithNativeDate[];
export function holidaysWithinInterval({
  start,
  end,
  returnNativeDate = false,
}: {
  start: Date;
  end: Date;
  returnNativeDate?: boolean;
}): unknown {
  const yearEnd = new Date(end).getUTCFullYear();
  const yearStart = new Date(start).getUTCFullYear();

  const holidays = Array.from({ length: yearEnd - yearStart + 1 }, (_, i) =>
    colombianHolidays(i + yearStart, { returnNativeDate })
  ).flat();

  return holidays.filter(({ celebrationDate }) => {
    const date =
      typeof celebrationDate === "string"
        ? new Date(celebrationDate)
        : celebrationDate;
    return date >= start && date <= end;
  });
}
