import React from 'react';
import styles from './Item.module.scss';

const Item = ({ title, children, stack }) => (
  <div className={styles.item}>
    <h3>{title}</h3>
    {children}
    <div className={styles.stack}>{stack}</div>
  </div>
);

export default Item;
