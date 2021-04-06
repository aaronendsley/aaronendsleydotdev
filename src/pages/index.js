import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import IntroContainer from '../components/IntroContainer';
import BlogPosts from '../components/BlogPosts';
import '../font/fonts.css';

const dummyData = [
  {
    postTitle:
      'This is a test post, an exceptionally long title perfect for testing problems',
    postDescription:
      'This is a post description, I may be short, or i could be long, either way I will describe what is in the post',
    postSlug: 'lol-Another-Post',
  },
  {
    postTitle:
      'This is a test post, an exceptionally long title perfect for testing problems',
    postDescription:
      'This is a post description, I may be short, or i could be long, either way I will describe what is in the post',
    postSlug: 'lol-Another-Post-2',
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroContainer />
    <BlogPosts BlogPosts={dummyData} />
  </Layout>
);

export default IndexPage;
