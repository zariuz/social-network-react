import axios from 'axios';
import { UserType } from '../types/types';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a581eddc-6b2a-4437-9b2a-cfc6d6cb8bb3',
  },
});

export enum resultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum resultCodesForCaptcha {
  CaptchaIsRequired = 10,
}

export type GetItemsType = {
  items: UserType[];
  totalCount: number;
  error: string | null;
};
