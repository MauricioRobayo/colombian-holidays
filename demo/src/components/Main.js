import React from 'react';
import styled from 'styled-components/macro';

const MainWrapper = styled.main`
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  time {
    display: block;
  }
  time::first-letter {
    text-transform: uppercase;
  }
`;
const MainContentWrapper = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
`;

const Main = ({ children, className }) => (
  <MainWrapper className={className}>
    <MainContentWrapper>{children}</MainContentWrapper>
  </MainWrapper>
);

export default Main;
