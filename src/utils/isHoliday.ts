import { getHolidaysByYear } from "./getHolidaysByYear";
import { isSameDate } from "./helpers";

export function isHoliday(date: Date): boolean {
	const holidays = getHolidaysByYear(date.getUTCFullYear(), {
		valueAsDate: true,
	});
	return holidays.some(({ celebrationDate }) =>
		isSameDate(celebrationDate, date),
	);
}
