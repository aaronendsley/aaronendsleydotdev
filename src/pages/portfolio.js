import React, { Fragment } from 'react';
import styled from 'styled-components';

const data = [
  {
    itemTitle: 'LOL This is a mega super title ',
    itemDescription:
      'LOL super cool portfolio item this item is so cool that you cant deny its awesomeness',
    itemSlug: '39898dsjfjlskjsd',
  },
  {
    itemTitle: 'LOL This is a mega super title ',
    itemDescription:
      'LOL super cool portfolio item this item is so cool that you cant deny its awesomeness',
    itemSlug: 'fkjajkfaslskdkfak',
  },
  {
    itemTitle: 'LOL This is a mega super title ',
    itemDescription:
      'LOL super cool portfolio item this item is so cool that you cant deny its awesomeness',
    itemSlug: 'ffhhsiissnsyhyenu',
  },
  {
    itemTitle: 'LOL This is a mega super title ',
    itemDescription:
      'LOL super cool portfolio item this item is so cool that you cant deny its awesomeness',
    itemSlug: 'kkdkdkkwuuushhbbbdd',
  },
  {
    itemTitle: 'LOL This is a mega super title ',
    itemDescription:
      'LOL super cool portfolio item this item is so cool that you cant deny its awesomeness',
    itemSlug: 'llllsskkks888w376767ssusdsdhhj',
  },
];

// portfolio page styles
const PortfolioContainer = styled.div`
  width: 90%;
  margin: 100px auto;
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
  width: 500px;
  margin: 20px auto;
  background: rgba(13, 12, 12, 0.47);
  border-top: solid 3px #25b3b8;
  display: table;
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
        <PortfolioItemButton>View Item</PortfolioItemButton>
      </PortfolioItemContainer>
    </>
  );
}

export default function portfolio() {
  return (
    <PortfolioContainer>
      <PortfolioHeader>My Portfolio</PortfolioHeader>
      {data.map(item => (
        <PortfolioItem portfolioItem={item} key={item.itemSlug} />
      ))}
    </PortfolioContainer>
  );
}
