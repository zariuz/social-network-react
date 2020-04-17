import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = () => {
  return (
    <form action="">
      <div>
        <Field name="login" type="text" placeholder="Login" component="input" />
      </div>
      <div>
        <Field
          name="password"
          type="text"
          placeholder="Password"
          component="input"
        />
      </div>
      <div>
        <Field name="rememberMe" type="checkbox" id="" component="input" />
        remember me
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = () => {
  return (
    <div className="">
      <h1>Login</h1>
      <LoginReduxForm />
    </div>
  );
};

export default Login;
