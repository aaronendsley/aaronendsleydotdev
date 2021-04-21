import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import IntroContainer from '../components/IntroContainer';
import BlogPosts from '../components/BlogPosts';
import '../font/fonts.css';

function IndexPage() {
  const getBlogPosts = useStaticQuery(graphql`
    {
      allSanityBlogPost {
        nodes {
          postTitle
          postSlug {
            current
          }
          postDescription
        }
      }
    }
  `);

  console.log(getBlogPosts);
  return (
    <Layout>
      <SEO title="Home" />
      <IntroContainer />
      <BlogPosts BlogPosts={getBlogPosts.allSanityBlogPost.nodes} />
    </Layout>
  );
}

export default IndexPage;
