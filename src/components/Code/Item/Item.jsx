import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.scss';

const Item = ({ children, title, stack }) => (
  <div className={styles.item}>
    <h3>{title}</h3>
    {children}
    <div className={styles.stack}>{stack}</div>
  </div>
);

Item.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
};

export default Item;
