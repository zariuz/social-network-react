import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { required, maxLengthCreator } from '../../../utilities/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength15 = maxLengthCreator(15);

export type AddPostFormValuesType = {
  newPostText: string;
};

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType>> = ({
  handleSubmit,
}) => {
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

export default reduxForm<AddPostFormValuesType>({
  form: 'profileAddPostForm',
})(AddPostForm);
