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

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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
      {captchaUrl && <img alt="captcha" src={captchaUrl} />}
      {captchaUrl && (
        <Field
          name="captcha"
          type="text"
          placeholder="Enter characters"
          component={Input}
          validate={[required]}
        />
      )}
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

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    const { email, password, remeberMe, captcha } = formData;
    login(email, password, remeberMe, captcha);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth, captchaUrl: state.auth.captchaUrl };
};

export default connect(mapStateToProps, { login })(Login);
