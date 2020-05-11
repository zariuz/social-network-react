import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import {
  required,
  maxLengthCreator,
} from './../../utilities/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          type="text"
          placeholder="Email"
          component={Input}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Field
          name="password"
          type="password"
          placeholder="Password"
          component={Input}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Field name="rememberMe" type="checkbox" component={Input} />
        remember me
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = ({ login, isAuth }) => {
  const onSubmit = (formData) => {
    const { email, password, remeberMe } = formData;
    login(email, password, remeberMe);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth };
};

export default connect(mapStateToProps, { login })(Login);
