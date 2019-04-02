import React from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.scss';

export default function Header(props) {
  return (
    <div className={styles.backHome}>
      <Link to="/">
        <span>M</span>
      </Link>
    </div>
  );
}
