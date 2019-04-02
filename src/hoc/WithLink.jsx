import React from 'react';
import PropTypes from 'prop-types';
import styles from './WithLink.module.scss';

const WithLink = ({ children, href, ext }) => {
  const attr = { href };
  if (ext === true) {
    attr.target = '_blank';
    attr.rel = 'noreferrer noopener';
  }

  return (
    <a {...attr} className={styles.link}>
      {children}
    </a>
  );
};

WithLink.defaultProps = {
  ext: false,
};

WithLink.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
  ext: PropTypes.bool,
};

export default WithLink;
