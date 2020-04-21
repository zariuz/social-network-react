import React from 'react';
import styles from './FormsControls.module.css';

export const Textarea = ({
  input,
  meta: { touched, error },
  type,
  placeholder,
}) => {
  const hasError = touched && error;

  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <textarea {...input} type={type} placeholder={placeholder} />
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Input = ({
  input,
  meta: { touched, error },
  type,
  placeholder,
}) => {
  const hasError = touched && error;

  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <input {...input} type={type} placeholder={placeholder} />
      {hasError && <span>{error}</span>}
    </div>
  );
};
