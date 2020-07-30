import React from 'react';
import styled from 'styled-components/macro';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 2rem 1rem 1rem;
  margin-top: auto;
  font-size: 0.75rem;
  a {
    color: ${({ theme }) => theme.white};
  }
  span {
    font-size: 2rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>
      Check out the{' '}
      <a href="https://github.com/mauriciorobayo/colombian-holidays">
        colombian-holidays
      </a>{' '}
      npm package to calculate colombian holidays.
    </p>
    <p>
      This is an{' '}
      <a href="https://github.com/mauriciorobayo/colombian-holidays-demo">
        open source
      </a>{' '}
      project.
    </p>
    <p>
      <span role="img" aria-label="Fireworks">
        🎆
      </span>
    </p>
  </StyledFooter>
);

export default Footer;
