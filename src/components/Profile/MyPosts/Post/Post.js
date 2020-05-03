import React from 'react';
import style from './Post.module.css';

const Post = ({ message, likesCount }) => {
  return (
    <div className={style.item}>
      <img src="https://international-advisory-experts.com/wp-content/uploads/2019/02/avatar-1-.png"></img>
      {message}
      <div>
        <span>like </span>
        {likesCount}
      </div>
    </div>
  );
};

export default Post;
