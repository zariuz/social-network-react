import React from 'react';
import { connect } from 'react-redux';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm from './AddPostForm';
import { actions } from '../../../redux/profile-reducer';

const MyPosts = ({ profilePage, addPost }) => {
  let onAddPost = (formData) => {
    addPost(formData.newPostText);
  };

  let state = profilePage;

  let postsElements = state.posts.map((post) => (
    <Post message={post.message} key={post.id} likesCount={post.likesCount} />
  ));

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <AddPostForm onSubmit={onAddPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(actions.addPostActionCreator(newPostText));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
