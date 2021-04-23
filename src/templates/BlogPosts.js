import { graphql } from 'gatsby';
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

export default function BlogPosts({ data: { blog } }) {
  console.log(blog);
  return (
    <div>
      <BlockContent blocks={blog._rawPostContent} />
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    blog: sanityBlogPost(postSlug: { current: { eq: $slug } }) {
      postTitle
      postDescription
      _rawPostContent
      postSlug {
        current
      }
      postContent {
        _key
        _type
        style
        children {
          _key
          _type
          text
        }
      }
    }
  }
`;
