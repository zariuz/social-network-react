import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  required,
  maxLengthCreator,
} from './../../utilities/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="login"
          type="text"
          placeholder="Login"
          component={Input}
          validate={[required, maxLength15]}
        />
      </div>
      <div>
        <Field
          name="password"
          type="text"
          placeholder="Password"
          component={Input}
          validate={[required, maxLength15]}
        />
      </div>
      <div>
        <Field name="rememberMe" type="checkbox" component={Input} />
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
