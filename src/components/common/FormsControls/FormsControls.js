import React from 'react';
import styles from './FormsControls.module.css';

export const FormsControls = ({ input, type, placeholder }) => {
  return (
    <div className={`${styles.formControl} ${styles.error}`}>
      <textarea {...input} type={type} placeholder={placeholder} />
      <span>Some error</span>
    </div>
  );
};
