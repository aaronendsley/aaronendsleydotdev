import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import './layout.css';
import TopBar from './TopBar';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      file(relativePath: { eq: "GitHub.png" }) {
        childImageSharp {
          fluid {
            base64
          }
        }
        name
      }

      site {
        siteMetadata {
          title
          githubLink
        }
      }
    }
  `);

  const GithubIcon = data.file.childImageSharp.fluid.base64;
  const GithubLink = data.site.siteMetadata.githubLink;

  console.log(GithubLink);

  return (
    <>
      <TopBar
        pageName={data.site.siteMetadata.title}
        githubLink={GithubLink}
        githubIcon={GithubIcon}
      />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
