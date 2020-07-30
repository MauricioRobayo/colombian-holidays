import React from 'react';
import styled from 'styled-components/macro';
import ReactTimeAgo from 'react-time-ago';
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { Link } from 'react-router-dom';

JavascriptTimeAgo.locale(en);

const CountDownWrapper = styled.div`
  margin: 0.15rem auto;
  display: inline-block;
  font-size: 0.85rem;
  padding: 0.35rem 0.5rem 0.25rem;
  border-radius: 4px;
  a {
    color: ${({ theme }) => theme.success};
    text-decoration: none;
  }
  &.current {
    background-color: ${({ theme }) => theme.success};
    margin-top: 0.5rem;
    a {
      color: white;
    }
  }
  &.inactive {
    background-color: inherit;
    text-decoration: line-through;
    opacity: 0.75;
    font-size: 0.75rem;
    padding: 0.15rem 0.25rem;
    a {
      color: ${({ theme }) => theme.danger};
    }
  }
`;

const CountDown = ({ inactive, current, date }) => (
  <CountDownWrapper
    className={`${inactive ? 'inactive' : ''} ${current ? 'current' : ''}`}
  >
    <Link to={`/${date.replace(/-/g, '/')}`}>
      <ReactTimeAgo date={new Date(date)} locale="en" />
    </Link>
  </CountDownWrapper>
);

export default CountDown;
