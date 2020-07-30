import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import Header from './Header';
import Main from './Main';

const NotFoundWrapper = styled(Main)`
  font-size: 2rem;
  select {
    border-bottom: 4px solid ${(props) => props.theme.grey};
  }
`;

const NoMatch = ({
  message,
  emoji,
  name,
  placeholder,
  selected,
  options,
  onChangeHandler,
}) => (
  <>
    <Header />
    <NotFoundWrapper>
      {message ? (
        <>
          <p role="img" aria-label="not-found">
            {emoji || '🤔'}
          </p>
          <p>{message}</p>
        </>
      ) : null}
      {options ? (
        <Dropdown
          name={name}
          placeholder={placeholder}
          selected={selected}
          options={options}
          onChangeHandler={onChangeHandler}
        />
      ) : null}
    </NotFoundWrapper>
  </>
);

export default NoMatch;
