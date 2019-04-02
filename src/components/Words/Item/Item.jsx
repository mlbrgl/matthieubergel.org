import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.scss';

const Item = ({ title, date }) => (
  <div className={styles.item}>
    <div className={styles.date}>{date}</div>
    <h3>{title}</h3>
  </div>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Item;
