import { usersAPI } from '../api/api';
import { UserType } from '../types/types';
import { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [] as UserType[],
  pageSize: 10,
  portionSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as number[], //Array of users id
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

type ActionsTypes = any;

export const actions = {
  followSuccess: (userId: number) => ({
    type: FOLLOW,
    userId,
  }),

  unfollowSuccess: (userId: number) => ({
    type: UNFOLLOW,
    userId,
  }),

  setUsers: (users: UserType[]) => ({ type: SET_USERS, users }),

  setCurrentPage: (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
  }),

  setTotalUsersCount: (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
  }),

  toggleIsFetching: (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
  }),

  toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  }),
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => async (
  dispatch,
) => {
  dispatch(actions.toggleIsFetching(true));
  dispatch(actions.setCurrentPage(currentPage));

  const response = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(actions.toggleIsFetching(false));
  dispatch(actions.setUsers(response.data.items));
  dispatch(actions.setTotalUsersCount(response.data.totalCount));
};

export const follow = (userId: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const response = await usersAPI.follow(userId);
  if (response.data.resultCode === 0) {
    dispatch(actions.followSuccess(userId));
  }
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const response = await usersAPI.unfollow(userId);
  if (response.data.resultCode === 0) {
    dispatch(actions.unfollowSuccess(userId));
  }
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export default usersReducer;
