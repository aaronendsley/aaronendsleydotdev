import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFooter = styled.footer`
  background-color: #000;
  width: 100%;
  height: 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: #25b3b8 6px solid;
  display: flex;
  font-family: dm;
`;

const Copyright = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #25b3b8;
  padding-left: 20px;
  padding-top: 5px;
`;

export default function Footer() {
  const Year = new Date().getFullYear();
  return (
    <StyledFooter>
      <Copyright>
        {`Designed and Developed by Aaron Endsley © ${Year}`}
      </Copyright>
    </StyledFooter>
  );
}
