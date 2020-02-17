import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likesCount="5" />
        <Post message="I'ts my first post" likesCount="3" />
      </div>
    </div>
  );
};

export default MyPosts;
