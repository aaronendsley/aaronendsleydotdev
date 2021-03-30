import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Bar = styled.div`
  background-color: #000;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: #25b3b8 6px solid;
  display: flex;
  font-family: dm;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #25b3b8;
  padding-left: 20px;
  padding-top: 5px;
`;

const GitHubIconFlexContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const IconContainer = styled.div`
  display: block;
  width: 75px;
`;
const GithubIcon = styled.img`
  width: 40%;
  margin: 7px auto;
  display: block;
`;

export default function TopBar({ pageName, githubLink, githubIcon }) {
  return (
    <Bar>
      <PageTitle>{pageName}</PageTitle>
      <GitHubIconFlexContainer>
        <IconContainer>
          <a href={githubLink}>
            <GithubIcon src={githubIcon} />
          </a>
        </IconContainer>
      </GitHubIconFlexContainer>
    </Bar>
  );
}

TopBar.propTypes = {
  pageName: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  githubIcon: PropTypes.string.isRequired,
};
