import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import styles from './WithLink.module.scss';

const WithLink = ({ children, href, ext }) => {
  const [hover, setHover] = useState(null);

  const attr = { href };
  if (ext === true) {
    attr.target = '_blank';
    attr.rel = 'noreferrer noopener';
  }

  const WrappedComponent = transitionStatus => (
    React.Children.map(children, child => React.cloneElement(child, { transitionStatus })));

  return (
    <a
      {...attr}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.link}
    >
      <Transition in={hover} timeout={0}>
        {transitionStatus => (
          WrappedComponent(transitionStatus)
        )}
      </Transition>
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
