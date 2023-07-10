import colombianHolidays from '../src/index'

const year = new Date().getFullYear()
const holidays = colombianHolidays({
    year,
    month: 1 /* January */,
});

console.log(`Getting holidays for January of ${year}`, holidays)