import { FIRST_HOLIDAY_YEAR, LAST_HOLIDAY_YEAR } from "../constants";
import getHoliday from "../helpers";
import holidays from "../holidays";
import type {
	ColombianHoliday,
	ColombianHolidayWithNativeDate,
} from "../types";

const holidaysWithNativeDateCache = new Map<
	number,
	ColombianHolidayWithNativeDate[]
>();
const holidaysCache = new Map<number, ColombianHoliday[]>();

function computeHolidaysInYear(
	year: number,
	valueAsDate: true,
): ColombianHolidayWithNativeDate[];
function computeHolidaysInYear(
	year: number,
	valueAsDate: false,
): ColombianHoliday[];
function computeHolidaysInYear(year: number, valueAsDate: boolean) {
	if (valueAsDate) {
		const holidaysInYear = holidays.map((holiday) =>
			getHoliday(holiday, { year, valueAsDate: true }),
		);

		return holidaysInYear.sort(
			(a, b) => a.celebrationDate.getTime() - b.celebrationDate.getTime(),
		);
	}

	const holidaysInYear = holidays.map((holiday) =>
		getHoliday(holiday, { year, valueAsDate: false }),
	);

	return holidaysInYear.sort((a, b) =>
		a.celebrationDate.localeCompare(b.celebrationDate),
	);
}

export function getHolidaysByYear(
	year: number,
	options?: { valueAsDate: false | undefined },
): ColombianHoliday[];
export function getHolidaysByYear(
	year: number,
	options?: { valueAsDate: true },
): ColombianHolidayWithNativeDate[];
export function getHolidaysByYear(
	year: number,
	{ valueAsDate = false }: { valueAsDate?: boolean } = {},
) {
	if (year < FIRST_HOLIDAY_YEAR || year > LAST_HOLIDAY_YEAR) {
		throw new Error(
			`The year should be between ${FIRST_HOLIDAY_YEAR} and ${LAST_HOLIDAY_YEAR}`,
		);
	}

	if (valueAsDate) {
		const cachedHolidays = holidaysWithNativeDateCache.get(year);
		if (cachedHolidays) {
			return cachedHolidays;
		}

		const holidaysInYear = computeHolidaysInYear(year, true);

		holidaysWithNativeDateCache.set(year, holidaysInYear);
		return holidaysInYear;
	}

	const cachedHolidays = holidaysCache.get(year);
	if (cachedHolidays) {
		return cachedHolidays;
	}

	const holidaysInYear = computeHolidaysInYear(year, false);

	holidaysCache.set(year, holidaysInYear);
	return holidaysInYear;
}
