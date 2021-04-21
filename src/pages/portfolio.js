import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

// portfolio page styles
const PortfolioContainer = styled.div`
  width: 90%;
  margin: 100px auto;
  display: block;
`;

const PortfolioHeader = styled.h1`
  color: #25b3b8;
  font-family: 'roboto', sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #fff;
`;

// portfolio item styles

const PortfolioItemContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  background: rgba(13, 12, 12, 0.47);
  border-top: solid 3px #25b3b8;
  display: table;

  @media (min-width: 1000px) {
    width: 495px;
  }
`;

const PortfolioItemHeader = styled.h2`
  color: #25b3b8;
  font-family: 'roboto', sans-serif;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  padding: 0;
  margin: 0;
`;

const StyledHr = styled.hr`
  color: #fff;
  width: 90%;
  height: 2px;
  background: #fff;
  margin: 0 auto 10px auto;
`;

const PortfolioItemDescription = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-family: dm;
  padding: 10px 20px 20px 20px;
`;

const PortfolioItemButton = styled.button`
  width: 200px;
  height: 50px;
  font-family: 'roboto', sans-serif;
  font-size: 1.5rem;
  color: #000;
  font-weight: bold;
  background: #25b3b8;
  border: none;
  margin: 0 auto 50px auto;
  display: block;

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: none;
    color: inherit;
  }

  a:visited {
    text-decoration: none;
    color: inherit;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (min-width: 1000px) {
    width: 90%;
  }
`;

function PortfolioItem({ portfolioItem }) {
  return (
    <>
      <PortfolioItemContainer>
        <PortfolioItemHeader>{portfolioItem.itemTitle}</PortfolioItemHeader>
        <StyledHr />
        <PortfolioItemDescription>
          {portfolioItem.itemDescription}
        </PortfolioItemDescription>
        <PortfolioItemButton>
          <Link to={`/portfolio/${portfolioItem.itemSlug.current}`}>
            View Item
          </Link>
        </PortfolioItemButton>
      </PortfolioItemContainer>
    </>
  );
}

export default function Portfolio() {
  const getPortfolioItems = useStaticQuery(graphql`
    {
      allSanityPortfolio {
        nodes {
          itemDescription
          itemSlug {
            current
          }
          itemTitle
        }
      }
    }
  `);
  return (
    <PortfolioContainer>
      <PortfolioHeader>My Portfolio</PortfolioHeader>
      <ContentContainer>
        {getPortfolioItems.allSanityPortfolio.nodes.map(item => (
          <PortfolioItem portfolioItem={item} key={item.itemSlug.current} />
        ))}
      </ContentContainer>
    </PortfolioContainer>
  );
}
