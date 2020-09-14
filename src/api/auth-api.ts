import { instance, APIResponseType, resultCodesEnum, resultCodesForCaptcha } from './api';

type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};

type LoginResponseDataType = {
  userId: number;
};

export const authAPI = {
  me() {
    return instance
      .get<APIResponseType<MeResponseDataType>>(`auth/me`)
      .then((res) => res.data);
  },
  login(
    email: string,
    password: string,
    remeberMe = false,
    captcha: null | string = null,
  ) {
    return instance
      .post<
        APIResponseType<LoginResponseDataType, resultCodesEnum | resultCodesForCaptcha>
      >(`auth/login`, {
        email,
        password,
        remeberMe,
        captcha,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance.delete(`auth/login`).then((res) => res.data);
  },
};
