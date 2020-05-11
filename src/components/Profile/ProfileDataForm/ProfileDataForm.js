import React from 'react';
import styles from './ProfileDataForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import {
  required,
  maxLengthCreator,
} from './../../../utilities/validators/validators';

const maxLength30 = maxLengthCreator(30);

const ProfileDataForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Full name:
        <Field
          name="fullName"
          type="text"
          placeholder="Full name"
          component={Input}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        About me:
        <Field
          name="aboutMe"
          type="text"
          placeholder="About me"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        Looking for a job:
        <Field name="lookingForAJob" type="checkbox" component={Input} />
      </div>
      <div>
        My professional skills:
        <Field
          name="lookingForAJobDescription"
          type="text"
          placeholder="My professional skills"
          component={Textarea}
        />
      </div>

      {/* <div>
        Contacts:
        {facebook ? <div>Facebook: {facebook}</div> : null}
        {website ? <div>Website: {website}</div> : null}
        {vk ? <div>VK: {vk}</div> : null}
        {twitter ? <div>Twitter: {twitter}</div> : null}
        {instagram ? <div>Instagram: {instagram}</div> : null}
        {youtube ? <div>Youtube: {youtube}</div> : null}
        {github ? <div>Github: {github}</div> : null}
        {mainLink ? <div>MainLink: {mainLink}</div> : null}
      </div> */}

      {error && <div className={styles.formSummaryError}>{error}</div>}

      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: 'editProfile', // a unique identifier for this form
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
