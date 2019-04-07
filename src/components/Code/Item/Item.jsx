import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';
import styles from './Item.module.scss';

const Item = ({
  children, title, stack, hover,
}) => {
  const hoverRef = useRef(null);
  const [tween, setTween] = useState(null);

  useEffect(() => {
    if (hover === false) {
      // Will only trigger after the first render, and not subsequent ones
      if (tween === null) {
        setTween(TweenLite.to(hoverRef.current, 0.3, {
          width: '100%',
        }).pause());
      } else {
        TweenLite.set(hoverRef.current, { left: 'unset', right: 0 });
        tween.reverse();
      }
    } else if (hover === true) {
      TweenLite.set(hoverRef.current, { right: 'unset', left: 0 });
      tween.play();
    }
  }, [hover]);

  return (
    <div className={styles.item}>
      { hover !== null ? <div ref={hoverRef} className={styles.hover} /> : null }
      <h3>{title}</h3>
      <div className={styles.content}>{children}</div>
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
