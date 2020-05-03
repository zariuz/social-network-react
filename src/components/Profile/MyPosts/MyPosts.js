import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  required,
  maxLengthCreator,
} from './../../../utilities/validators/validators';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { Textarea } from './../../common/FormsControls/FormsControls';

const maxLength15 = maxLengthCreator(15);

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          type="textarea"
          name="newPostText"
          component={Textarea}
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

const MyPosts = ({ profilePage, addPost }) => {
  let state = profilePage;

  let postsElements = state.posts.map((post) => (
    <Post message={post.message} key={post.id} likesCount={post.likesCount} />
  ));

  let onAddPost = (formData) => {
    addPost(formData.newPostText);
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <AddPostReduxForm onSubmit={onAddPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
