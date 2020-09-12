import axios from 'axios';
import { ProfileType } from '../types/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a581eddc-6b2a-4437-9b2a-cfc6d6cb8bb3',
  },
});

export const usersAPI = {
  getUsers(currentPage = 2, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`);
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile: any) {
    let formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile);
  },
};

export enum resultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum resultCodesForCaptcha {
  CaptchaIsRequired = 10,
}

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

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
