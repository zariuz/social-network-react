import React from 'react';
import { connect } from 'react-redux';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm from './AddPostForm';
import { actions } from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { PostType } from '../../../types/types';
import { AddPostFormValuesType } from './AddPostForm';

export type MapPropsType = {
  posts: Array<PostType>;
};
export type DispatchPropsType = {
  addPost: (newPostText: string) => void;
};

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
  let postsElements = [...props.posts]
    .reverse()
    .map((post) => (
      <Post message={post.message} key={post.id} likesCount={post.likesCount} />
    ));

  let onAddPost = (values: AddPostFormValuesType) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <AddPostForm onSubmit={onAddPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  };
};

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(
  mapStateToProps,
  {
    addPost: actions.addPostActionCreator,
  },
)(MyPosts);
