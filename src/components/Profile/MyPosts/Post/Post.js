import React from 'react';
import s from './Post.module.css';

const Post = props => {
  return (
    <div className={s.item}>
      <img src="https://international-advisory-experts.com/wp-content/uploads/2019/02/avatar-1-.png"></img>
      {props.message}
      <div>
        <span>like </span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
