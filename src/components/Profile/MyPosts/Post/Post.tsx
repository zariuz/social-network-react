import React from 'react';
import style from './Post.module.css';
import userPhoto from '../../../../assets/images/user.png';

type PropsType = {
  message: string;
  likesCount: number;
};

const Post: React.FC<PropsType> = ({ message, likesCount }) => {
  return (
    <div className={style.item}>
      <img src={userPhoto} alt="user"></img>
      {message}
      <div>
        <span>like </span>
        {likesCount}
      </div>
    </div>
  );
};

export default Post;
