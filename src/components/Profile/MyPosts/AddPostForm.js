import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  required,
  maxLengthCreator,
} from './../../../utilities/validators/validators';
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

export default reduxForm({
  form: 'profileAddPostForm',
})(AddPostForm);
