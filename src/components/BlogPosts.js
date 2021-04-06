import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BlogPostsHeader = styled.h2`
  color: #25b3b8;
  font-size: 2.2rem;
  font-family: 'roboto', sans-serif;
  font-weight: bold;
  text-align: center;
  padding: 20px 0 40px 0;
  margin: 0;
  letter-spacing: 2px;
  text-decoration: underline;
  text-decoration-color: #fff;
`;

const BlogPostsContainer = styled.div`
  width: 75%;
  border-bottom: solid 5px #25b3b8;
  margin: 0 auto 50px auto;
  display: block;
`;

/// Blog Post component

const BlogPostContainer = styled.div`
  width: 100%;
  height: fit-content;
  background: rgba(13, 12, 12, 0.47);
  border-top: solid 4px #25b3b8;
  display: table;
  margin-bottom: 100px;
`;

const PostTitle = styled.h3`
  color: #25b3b8;
  font-size: 1.8rem;
  font-family: 'roboto', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  /* text-decoration: underline;
  text-decoration-color: #fff; */
  padding-left: 20px;
  padding-top: 10px;
  margin-bottom: 2px;
  text-transform: capitalize;
`;

const PostDescription = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-family: dm;
  padding: 10px 20px 20px 20px;
`;

const StyledHr = styled.hr`
  color: #fff;
  width: 97%;
  height: 2px;
  background: #fff;
  margin: 0 auto 10px auto;
`;

const PostButton = styled.button`
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

function BlogPost({ post }) {
  return (
    <>
      <BlogPostContainer>
        <PostTitle>{post.postTitle}</PostTitle>
        <StyledHr />
        <PostDescription>{post.postDescription}</PostDescription>
        <PostButton>Read Post</PostButton>
      </BlogPostContainer>
    </>
  );
}

export default function BlogPosts({ BlogPosts }) {
  return (
    <>
      <BlogPostsHeader> Blog Posts </BlogPostsHeader>
      <BlogPostsContainer>
        {BlogPosts.map(post => (
          <BlogPost post={post} key={post.postSlug} />
        ))}
        <br />
        <br />
        <br />
        <br />
      </BlogPostsContainer>
    </>
  );
}

BlogPosts.propTypes = {
  BlogPosts: PropTypes.array.isRequired,
};
