import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case USER_LOGIN:
      return {
        ...state,
        ...action.data,
      };
    case USER_LOGOUT:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export const setUserLogin = (id, email, login) => ({
  type: USER_LOGIN,
  data: { id, email, login },
});

export const setUserLogout = (id, email, login) => ({
  type: USER_LOGOUT,
  data: { id, email, login },
});

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};

export const getUserLogin = () => {
  return (dispatch) => {
    authAPI.login().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setUserLogin(id, email, login));
      }
    });
  };
};

export const getUserLogout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setUserLogout(id, email, login));
      }
    });
  };
};

export default authReducer;
