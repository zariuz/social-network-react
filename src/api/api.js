import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a581eddc-6b2a-4437-9b2a-cfc6d6cb8bb3'
  }
});

export const usersAPI = {
  getUsers(currentPage = 2, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  authMe() {
    return instance.get(`auth/me`).then(response => response.data);
  }
};
