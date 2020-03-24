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
  }
};
