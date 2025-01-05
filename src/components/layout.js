/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import PropTypes from 'prop-types';
import React from 'react';

import ContentArea from './contentArea/contentArea';
import Footer from './footer/footer';
import Header from './navigation/header/header';

const Layout = ({ children }) => (
  <>
    <ContentArea />
    <Header />
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
