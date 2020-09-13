import { instance, resultCodesEnum, resultCodesForCaptcha } from './api';

type MeResponseType = {
  data: { id: number; email: string; login: string };
  resultCode: resultCodesEnum;
  messages: string[];
};

type LoginResponseType = {
  data: { userId: number };
  resultCode: resultCodesEnum | resultCodesForCaptcha;
  messages: string[];
};

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`).then((res) => res.data);
  },
  login(
    email: string,
    password: string,
    remeberMe = false,
    captcha: null | string = null,
  ) {
    return instance
      .post<LoginResponseType>(`auth/login`, {
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
