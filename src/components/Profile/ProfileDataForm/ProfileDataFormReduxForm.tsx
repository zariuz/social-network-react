import React from 'react';
import styles from './ProfileDataFormReduxForm.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utilities/validators/validators';
import { ProfileType } from '../../../types/types';

const maxLength30 = maxLengthCreator(30);
type PropsType = {
  profile: ProfileType;
};

const ProfileDataForm: React.FC<
  InjectedFormProps<ProfileType, PropsType> & PropsType
> = ({ handleSubmit, error, profile }) => {
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

      <div>
        Contacts:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              {key}:
              <Field name={'contacts.' + key} type="text" component={Input} />
            </div>
          );
        })}
      </div>

      {error && <div className={styles.formSummaryError}>{error}</div>}

      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({
  form: 'editProfile',
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
