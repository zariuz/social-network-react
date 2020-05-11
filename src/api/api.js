import * as axios from 'axios';

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
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile) {
    let formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, remeberMe = false) {
    return instance.post(`auth/login`, { email, password, remeberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
