import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import IntroContainer from '../components/IntroContainer';
import '../font/fonts.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroContainer />
  </Layout>
);

export default IndexPage;
