import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 5 },
    { id: 2, message: "I'ts my first post", likesCount: 3 }
  ];

  let postsElements = posts.map(post => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
