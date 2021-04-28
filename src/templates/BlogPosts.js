import { graphql } from 'gatsby';
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

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
      <img src={urlFor(props.node.asset._ref).width(200).url()} alt="" />
    ),
  },
};

export default function BlogPosts({ data: { blog } }) {
  console.log(blog._rawPostContent);
  return (
    <div>
      <BlockContent blocks={blog._rawPostContent} serializers={serializer} />
      hi
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
    }
  }
`;
