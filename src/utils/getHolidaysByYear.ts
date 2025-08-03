import colombianHolidays from "..";
import type {
	ColombianHoliday,
	ColombianHolidayWithNativeDate,
} from "../types";

const holidaysWithNativeDateCache = new Map<
	number,
	ColombianHolidayWithNativeDate[]
>();
const holidaysCache = new Map<number, ColombianHoliday[]>();

export function getHolidaysForYear(
	year: number,
	options?: { valueAsDate: false | undefined },
): ColombianHoliday[];
export function getHolidaysForYear(
	year: number,
	options?: { valueAsDate: true },
): ColombianHolidayWithNativeDate[];
export function getHolidaysForYear(
	year: number,
	{ valueAsDate = false }: { valueAsDate?: boolean } = {},
) {
	if (valueAsDate) {
		const cachedHolidays = holidaysWithNativeDateCache.get(year);
		if (cachedHolidays) {
			return cachedHolidays;
		}

		const holidays = colombianHolidays({ year, valueAsDate });
		holidaysWithNativeDateCache.set(year, holidays);
		return holidays;
	}

	const cachedHolidays = holidaysCache.get(year);
	if (cachedHolidays) {
		return cachedHolidays;
	}

	const holidays = colombianHolidays({ year, valueAsDate });
	holidaysCache.set(year, holidays);
	return holidays;
}
