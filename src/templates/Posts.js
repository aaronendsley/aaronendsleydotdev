import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SanityBlockContent from '../components/SanityBlockContent';

const PostWrapper = styled.div`
  margin: 100px auto 40px auto;
  display: table;
  /* border-left: #fff solid 5px;
  border-right: #fff solid 5px; */
  width: 80%;
  background: rgba(13, 12, 12, 0.47);
`;

const Title = styled.h1`
  color: #25b3b8;
  font-size: 2.2rem;
  font-family: 'roboto', sans-serif;
  font-weight: bold;
  text-align: center;
  margin: 0;
  letter-spacing: 2px;
  text-decoration: underline;
  text-decoration-color: #fff;
`;

const HomeButton = styled.button`
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

  a:visted {
    text-decoration: none;
    color: inherit;
  }
`;

export default function Posts({ pageContext: { title, content } }) {
  return (
    <PostWrapper>
      <Title>{title}</Title>
      <SanityBlockContent data={content} />
      <HomeButton>
        <Link to="/">Home</Link>
      </HomeButton>
    </PostWrapper>
  );
}
