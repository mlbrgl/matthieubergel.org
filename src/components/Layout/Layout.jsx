import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

const Layout = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

Layout.defaultProps = {
  className: '',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;
