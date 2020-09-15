import { FormAction, stopSubmit } from 'redux-form';
import { resultCodesEnum, resultCodesForCaptcha } from '../api/api';
import { authAPI } from '../api/auth-api';
import { securityAPI } from '../api/security-api';
import { BaseThunkType, InferActionsTypes } from './redux-store';

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

const authReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
    case 'SET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const actions = {
  setAuthUserData: (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
  ) =>
    ({
      type: 'SET_USER_DATA',
      payload: { id, email, login, isAuth },
    } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: 'SET_CAPTCHA_URL_SUCCESS',
      payload: { captchaUrl },
    } as const),
};

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const meData = await authAPI.me();

  if (meData.resultCode === resultCodesEnum.Success) {
    const { id, login, email } = meData.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

export const login = (
  email: string,
  password: string,
  remeberMe: boolean,
  captcha: string,
): ThunkType => async (dispatch) => {
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

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch) => {
  const logoutData = await authAPI.logout();
  if (logoutData.resultCode === resultCodesEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export default authReducer;

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>;
