import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Container = styled.div`
  width: 80%;
  margin: 150px auto;
  color: #fff;
  /* border: solid 3px #25b3b8; */

  @media (min-width: 1000px) {
    width: 75%;
  }
  display: block;
`;

const TagLine = styled.h2`
  font-family: 'roboto', san-serif;
  font-size: 3.5rem;
  color: #25b3b8;
  padding-left: 25px;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const BioBox = styled.div`
  width: 100%;
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
  background: rgba(13, 12, 12, 0.47);

  display: grid;
  grid-template-row: 1fr 1fr;

  @media (min-width: 1000px) {
    height: 350px;
    grid-template-columns: 1fr 3fr;
  }
`;

const Content = styled.div`
  width: 80%;
  margin: 5px auto 40px auto;

  @media (min-width: 1000px) {
    margin: 100px auto;
  }
`;

const BioContainer = styled.div`
  border-bottom: solid 3px #25b3b8;
`;

const Bio = styled.p`
  color: #fff;
  font-family: dm;
  font-size: 1.5rem;
  margin-bottom: 0px;
  padding-bottom: 0px;
`;

const PortfolioContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0;
  padding: 0;

  a {
    font-family: 'roboto', sans-serif;
    font-size: 1.8rem;
    color: #25b3b8;
    letter-spacing: 3px;
    padding-top: 3px;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    color: #25b3b8;
  }

  a:visited {
    text-decoration: none;
    color: #25b3b8;
  }
`;

const PictureContainer = styled.div`
  width: 300px;
  margin: 5px auto;
  display: block;

  @media (min-width: 1000px) {
    margin: 0;
  }
`;

const ProfilePic = styled.img`
  width: 250px;
  border: solid 5px #25b3b8;
  border-radius: 10%;
  margin: 30px auto;
  display: block;

  @media (min-width: 1000px) {
    margin: 45px auto;
  }
`;

export default function IntroContainer() {
  const data = useStaticQuery(graphql`
    query profilePic {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          resolutions {
            srcWebp
          }
        }
      }
    }
  `);

  const profilePic = data.file.childImageSharp.resolutions.srcWebp;

  return (
    <Container>
      <TagLine>Write Code, Drink Coffee, Repeat...</TagLine>
      <BioBox>
        <PictureContainer>
          <ProfilePic src={profilePic} />
        </PictureContainer>
        <div>
          <Content>
            <BioContainer>
              <Bio>
                Hi! Im Aaron Endsley, a web developer from Oklahoma, focused on
                JavaScript, React, Next, Gatsby, and Node
              </Bio>
            </BioContainer>
            <PortfolioContainer>
              <Link to="/portfolio">PORTFOLIO</Link>
            </PortfolioContainer>
          </Content>
        </div>
      </BioBox>
    </Container>
  );
}
