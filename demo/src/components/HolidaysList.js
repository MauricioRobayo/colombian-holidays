import React from 'react';
import styled from 'styled-components/macro';
import PrettyDate from './PrettyDate';
import Countdown from './Countdown';
import Header from './Header';
import Main from './Main';

const HolidaysListWrapper = styled(Main)`
  height: auto;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li:first-child {
      border-top: 1px solid ${({ theme }) => theme.greylighter};
    }
    li {
      padding: 0.75em;
      border-bottom: 1px solid ${({ theme }) => theme.greylighter};
      h3 {
        margin: 0 0 0.25rem;
      }
    }
    li.inactive {
      padding: 0.25rem 0.75rem 0.15rem;
      color: ${({ theme }) => theme.inactiveFG};
      font-size: 0.85rem;
      h3 {
        font-weight: normal;
        margin-bottom: 0.15rem;
      }
    }
  }
`;
const date = new Date();

const HolidaysList = ({
  holidays,
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
    <HolidaysListWrapper>
      <ul>
        {holidays.map(({ celebrationDate, name }, index, array) => {
          // Colombian timezone adjustment
          const holidayDate = new Date(`${celebrationDate}T05:00`);
          const currentYear = holidayDate.getFullYear() === date.getFullYear();
          const inactive = holidayDate < date && currentYear;
          let current = false;
          if (index) {
            const previousIsActive =
              new Date(`${array[index - 1].date}T05:00`) < date;
            current = currentYear && inactive !== previousIsActive;
          }
          return (
            <li key={name} className={inactive ? 'inactive' : ''}>
              <h3>{name}</h3>
              <PrettyDate date={celebrationDate} />
              {currentYear && <Countdown
                date={celebrationDate}
                inactive={inactive}
                current={current}
              />}
            </li>
          );
        })}
      </ul>
    </HolidaysListWrapper>
  </>
);

export default HolidaysList;
