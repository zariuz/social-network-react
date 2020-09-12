import { stopSubmit } from 'redux-form';
import { authAPI, resultCodesEnum, resultCodesForCaptcha, securityAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA_URL_SUCCESS = 'auth/SET_CAPTCHA_URL_SUCCESS';

export type initialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
};

const initialState: initialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

type SetAuthUserDataActionPayloadType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

type getCaptchaUrlSuccessActionType = {
  type: typeof SET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};

export const getCaptchaUrlSuccess = (
  captchaUrl: string,
): getCaptchaUrlSuccessActionType => ({
  type: SET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch: any) => {
  const meData = await authAPI.me();

  if (meData.resultCode === resultCodesEnum.Success) {
    const { id, login, email } = meData.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (
  email: string,
  password: string,
  remeberMe: boolean,
  captcha: string,
) => async (dispatch: any) => {
  const loginData = await authAPI.login(email, password, remeberMe, captcha);
  if (loginData.resultCode === resultCodesEnum.Success) {
    //success, get auth data
    dispatch(getAuthUserData());
  } else {
    if (loginData.resultCode === resultCodesForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    const message =
      loginData.messages.length > 0 ? loginData.messages[0] : 'Common error';
    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  const logoutData = await authAPI.logout();
  if (logoutData.resultCode === resultCodesEnum.Success) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
