import { useState, useEffect } from 'react';
import { getHolidays, getDays } from '../utils/dateHelpers';

export default function useHolidays(
  selectedYear,
  selectedMonth,
  selectedDay,
  history
) {
  const [selectedDate, setSelectedDate] = useState({
    year: selectedYear,
    month: selectedMonth,
    day: selectedDay,
  });
  const [days, setDays] = useState(getDays(selectedYear, selectedMonth));
  const [holidays, setHolidays] = useState(getHolidays(selectedYear));

  useEffect(() => {
    setSelectedDate({
      year: selectedYear,
      month: selectedMonth,
      day: selectedDay,
    });
    setHolidays(getHolidays(selectedYear));
    setDays(getDays(selectedYear, selectedMonth));
  }, [selectedYear, selectedMonth, selectedDay]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSelectedDate({
      ...selectedDate,
      [name]: value,
    });
    const path =
      name === 'year'
        ? `/${value}`
        : name === 'month'
        ? `/${selectedDate.year}/${value}`
        : `/${selectedDate.year}/${selectedDate.month}/${value}`;
    history.push(path);
  };
  return {
    selectedDate,
    days,
    holidays,
    onChangeHandler,
  };
}
