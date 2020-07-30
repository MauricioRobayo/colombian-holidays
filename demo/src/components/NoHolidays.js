import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import { monthsNames } from '../utils/dateHelpers';

const NoHolidays = ({
  month,
  year,
  day,
  days,
  months,
  years,
  onChangeHandler,
}) => (
  <>
    <Header
      day={day}
      month={month}
      year={year}
      days={days}
      months={months}
      years={years}
      onChangeHandler={onChangeHandler}
    />
    <Main>
      <p>
        No holidays during {monthsNames[parseInt(month, 10) - 1]}{' '}
        <Link to={`/${year}`}>{year}</Link>.
      </p>
      <p>
        <span role="img" aria-label="no holidays">
          😥
        </span>
      </p>
    </Main>
  </>
);

export default NoHolidays;
