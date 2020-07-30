import React from 'react';
import NoMatch from '../components/NoMatch';
import HolidaysList from '../components/HolidaysList';
import Day from '../components/Day';
import NoHolidays from '../components/NoHolidays';
import {
  getYears,
  monthsNames,
  isValidYear,
  isValidMonth,
  isValidDay,
} from '../utils/dateHelpers';
import useHolidays from '../utils/useHolidays';

const Holidays = ({ match, history }) => {
  const startYear = 1984;
  const currentYear = new Date().getFullYear();
  const yearsPastCurrentYear = 10;
  const endYear = currentYear + yearsPastCurrentYear;
  const years = getYears(currentYear, startYear, yearsPastCurrentYear);

  const { selectedDate, days, holidays, onChangeHandler } = useHolidays(
    match.params.year,
    match.params.month,
    match.params.day,
    history
  );

  if (
    (selectedDate.year &&
      !isValidYear(selectedDate.year, startYear, endYear)) ||
    (selectedDate.month && !isValidMonth(selectedDate.month)) ||
    (selectedDate.day && !isValidDay(selectedDate.day, days))
  ) {
    const yearsOptions = {
      name: 'year',
      placeholder: 'years',
      options: years,
    };
    return (
      <NoMatch
        name={yearsOptions.name}
        placeholder={yearsOptions.placeholder}
        options={yearsOptions.options}
        message="It seems like we don't have that information."
        onChangeHandler={onChangeHandler}
      />
    );
  }
  if (selectedDate.day) {
    const date = `${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`;
    const isHoliday = holidays.find(
      (holiday) => holiday.celebrationDate === date
    );
    return (
      <Day
        day={selectedDate.day}
        month={selectedDate.month}
        year={selectedDate.year}
        days={days}
        months={monthsNames}
        years={years}
        onChangeHandler={onChangeHandler}
        date={date}
        isHoliday={isHoliday}
      />
    );
  }
  const currentHolidays = selectedDate.month
    ? holidays.filter(
        (holiday) =>
          holiday.celebrationDate.split('-')[1] === selectedDate.month
      )
    : holidays;
  if (selectedDate.month && currentHolidays.length === 0) {
    return (
      <NoHolidays
        day={selectedDate.day}
        month={selectedDate.month}
        year={selectedDate.year}
        days={days}
        months={monthsNames}
        years={years}
        onChangeHandler={onChangeHandler}
      />
    );
  }
  return (
    <HolidaysList
      day={selectedDate.day}
      month={selectedDate.month}
      year={selectedDate.year}
      days={days}
      months={monthsNames}
      years={years}
      onChangeHandler={onChangeHandler}
      holidays={currentHolidays}
    />
  );
};

export default Holidays;
