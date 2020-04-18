import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
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
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
