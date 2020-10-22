import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { required, maxLengthCreator } from '../../utilities/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';

const maxLength30 = maxLengthCreator(30);

type LoginFormOwnProps = {
  captchaUrl: string | null;
};

const LoginForm: React.FC<
  InjectedFormProps<LoginFormType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <div>
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
    </div>
  );
};

const LoginReduxForm = reduxForm<LoginFormType, LoginFormOwnProps>({
  form: 'login',
})(LoginForm);

type LoginFormType = {
  captcha: string;
  remeberMe: boolean;
  password: string;
  email: string;
};

export const LoginPage: React.FC = () => {
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl);
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  const dispatch = useDispatch();

  const onSubmit = (formData: LoginFormType) => {
    const { email, password, remeberMe, captcha } = formData;
    dispatch(login(email, password, remeberMe, captcha));
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
      <div className={styles.loginInfo}>
        <p>If you don't have an account, use test login and password.</p>
        <p>Login: free@samuraijs.com</p>
        <p>Password: free</p>
      </div>
    </div>
  );
};
