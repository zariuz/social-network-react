import React from 'react';
import style from './News.module.css';

type PropsType = {};

const News: React.FC<PropsType> = () => {
  return (
    <div className={style.main}>
      <p>There will be news</p>
    </div>
  );
};

export default News;
