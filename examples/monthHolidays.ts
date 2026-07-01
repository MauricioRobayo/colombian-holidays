import { getHolidaysByYear } from "../src/utils/getHolidaysByYear";

const year = new Date().getFullYear();
const holidays = getHolidaysByYear(year).filter((holiday) => {
	return Number(holiday.celebrationDate.slice(5, 7)) === 1;
});

console.log(`Getting holidays for January of ${year}`, holidays);
