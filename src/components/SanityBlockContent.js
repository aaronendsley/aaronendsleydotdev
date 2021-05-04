import { graphql } from 'gatsby';
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';
import styled from 'styled-components';

const StyleContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  h1 {
    color: #25b3b8;
    font-family: 'roboto', sans-serif;
    font-size: 2.2rem;
  }

  h2 {
    color: #25b3b8;
    font-family: 'roboto', sans-serif;
    font-size: 1.8rem;
  }

  h3 {
    color: #25b3b8;
    font-family: 'roboto', sans-serif;
    font-size: 1.5rem;
  }

  h4 {
    color: #25b3b8;
    font-family: 'roboto', sans-serif;
    font-size: 1.3rem;
  }

  p {
    color: #fff;
    font-family: dm, sans-serif;
    font-size: 1.2rem;
  }
`;

const ImageTag = styled.img`
  width: 80%;
  margin: 50px auto;
  display: block;
  border: solid 8px #25b3b8;
  border-radius: 20px;
  @media (min-width: 1000px) {
    width: 400px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: block;
`;

function ImageComponent({ source }) {
  return (
    <ImageContainer>
      <ImageTag src={source} alt="" />
    </ImageContainer>
  );
}

const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_ID,
  dataset: process.env.GATSBY_SANITYDATASET,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const serializer = {
  types: {
    image: props => (
      <ImageComponent source={urlFor(props.node.asset._ref).width(500).url()} />
    ),
  },
};

export default function BlogPosts({ data }) {
  console.log(data);
  return (
    <StyleContainer>
      <BlockContent blocks={data} serializers={serializer} />
    </StyleContainer>
  );
}
