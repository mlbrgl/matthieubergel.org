import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './WithLink.module.scss';

const WithLink = ({ children, href, ext }) => {
  const [hover, setHover] = useState(null);

  const attr = { href };
  if (ext === true) {
    attr.target = '_blank';
    attr.rel = 'noreferrer noopener';
  }

  const WrappedComponent = React.Children
    .map(children, child => React.cloneElement(child, { hover }));

  return (
    <a
      {...attr}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.link}
    >
      {WrappedComponent}
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
