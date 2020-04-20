import React from 'react';
import styles from './FormsControls.module.css';

export const Textarea = ({ input, meta, type, placeholder }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <textarea {...input} type={type} placeholder={placeholder} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, type, placeholder }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <input {...input} type={type} placeholder={placeholder} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
