import React from 'react';
import styles from './FormsControls.module.css';

type PropsTypes = {
  input: string;
  meta: { touched: boolean; error: string };
  type: string;
  placeholder: string;
};

export const Textarea: React.FC<PropsTypes> = ({
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

export const Input: React.FC<PropsTypes> = ({
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
