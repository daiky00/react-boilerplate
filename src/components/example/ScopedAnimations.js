import React, { Component } from 'react';
import styles from './ScopedAnimations.css';

export default function ScopedAnimations() {
  return (
    <div className={styles.root}>
      <div className={styles.ball} />
    </div>
  );
};
