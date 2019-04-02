import React from 'react';
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

export default WithLink;
