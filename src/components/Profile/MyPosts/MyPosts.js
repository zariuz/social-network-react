import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
  required,
  maxLengthCreator,
} from './../../../utilities/validators/validators';

const maxLength15 = maxLengthCreator(15);

const AddPostForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component="textarea"
          placeholder="Enter your text"
          validate={[required, maxLength15]}
        />
      </div>
      <div>
        <button type="submit">Add post</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: 'profileAddPostForm',
})(AddPostForm);

const MyPosts = (props) => {
  let state = props.profilePage;

  let postsElements = state.posts.map((post) => (
    <Post message={post.message} key={post.id} likesCount={post.likesCount} />
  ));

  let onAddPost = (formData) => {
    props.addPost(formData.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
