import styles from "./Card.module.css";
import React from 'react'
export default function Card({children}) {
  return (
    <div className={styles.Card}>
      {children}
    </div>
  );
}
