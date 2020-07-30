import React from 'react';
import Dropdown from '../components/Dropdown';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.primary};
  padding: 1rem 1rem 3rem;
  border-bottom: 6px solid ${(props) => props.theme.danger};
  color: ${(props) => props.theme.white};
  .dropdowns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: ${(props) => props.theme.maxWidth}) {
      flex-direction: row;
    }
  }
  select {
    font-size: 1.5rem;
    @media screen and (min-width: ${(props) => props.theme.maxWidth}) {
      font-size: 2rem;
    }
  }
`;

const Header = ({ day, month, year, days, months, years, onChangeHandler }) => {
  const monthNumber = month && parseInt(month, 10) - 1;
  const daysOptions = {
    name: 'day',
    placeholder: 'day',
    options: days,
  };
  const yearsOptions = {
    name: 'year',
    placeholder: 'year',
    options: years,
  };
  const monthsOptions = {
    name: 'month',
    placeholder: 'month',
    options: months,
  };
  return (
    <HeaderWrapper>
      <h1>
        Colombian Holidays{' '}
        {monthNumber ? monthsOptions.options[monthNumber] : ''} {year}
      </h1>
      {year && (
        <div className="dropdowns">
          <Dropdown
            {...yearsOptions}
            onChangeHandler={onChangeHandler}
            selected={year}
          />
          <Dropdown
            {...monthsOptions}
            onChangeHandler={onChangeHandler}
            selected={month}
          />
          {month && (
            <Dropdown
              {...daysOptions}
              onChangeHandler={onChangeHandler}
              selected={day}
            />
          )}
        </div>
      )}
    </HeaderWrapper>
  );
};

export default Header;
