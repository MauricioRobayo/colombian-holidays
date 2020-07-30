import React from 'react';
import styled from 'styled-components';
import PrettyDate from './PrettyDate';
import Header from './Header';
import Main from './Main';

const DayWrapper = styled(Main)`
  font-size: 1.5rem;
  .celebrate:after,
  .celebrate:before {
    content: '✨';
  }
`;

const Day = ({
  isHoliday,
  date,
  day,
  month,
  year,
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
    <DayWrapper>
      <PrettyDate date={date} />
      {isHoliday ? <p className="celebrate">HOLIDAY</p> : <p>NOT HOLIDAY</p>}
      <span role="img" aria-label={isHoliday ? 'holiday' : 'not holiday'}>
        {isHoliday ? '😄' : '😥'}
      </span>
    </DayWrapper>
  </>
);

export default Day;
