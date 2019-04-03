import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';
import styles from './Item.module.scss';

const Item = ({
  children, title, stack, hover,
}) => {
  const contentRef = useRef(null);
  const [tween, setTween] = useState(null);

  useEffect(() => {
    // Will only trigger after the first render, and not subsequent ones
    if (tween === null) {
      // https://codepen.io/anon/pen/bNxYqq
      setTween(TweenLite.from(contentRef.current, 0.3, { height: 0, autoAlpha: 0 }).reversed(true));
    } else if (hover) {
      tween.play();
    } else {
      tween.reverse();
    }
  }, [hover]);

  return (
    <div className={styles.item}>
      <h3>{title}</h3>
      <div ref={contentRef} className={styles.content}>{children}</div>
      <div className={styles.stack}>{stack}</div>
    </div>
  );
};

Item.defaultProps = {
  hover: null,
};

Item.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  hover: PropTypes.bool,
};

export default Item;
