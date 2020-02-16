import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://international-advisory-experts.com/wp-content/uploads/2019/02/avatar-1-.png"></img>
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
