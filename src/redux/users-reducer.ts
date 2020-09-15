import { usersAPI } from '../api/users-api';
import { UserType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';

const initialState = {
  users: [] as UserType[],
  pageSize: 10,
  portionSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as number[], //Array of users id
};

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case 'SET_USERS':
      return {
        ...state,
        users: action.users,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case 'SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case 'TOGGLE_IS_FOLLOWING_PROGRESS':
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

export const actions = {
  followSuccess: (userId: number) =>
    ({
      type: 'FOLLOW',
      userId,
    } as const),

  unfollowSuccess: (userId: number) =>
    ({
      type: 'UNFOLLOW',
      userId,
    } as const),

  setUsers: (users: UserType[]) => ({ type: 'SET_USERS', users } as const),

  setCurrentPage: (currentPage: number) =>
    ({
      type: 'SET_CURRENT_PAGE',
      currentPage,
    } as const),

  setTotalUsersCount: (totalUsersCount: number) =>
    ({
      type: 'SET_TOTAL_USERS_COUNT',
      count: totalUsersCount,
    } as const),

  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'TOGGLE_IS_FETCHING',
      isFetching,
    } as const),

  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
      isFetching,
      userId,
    } as const),
};

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => async (
  dispatch,
) => {
  dispatch(actions.toggleIsFetching(true));
  dispatch(actions.setCurrentPage(currentPage));

  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(actions.toggleIsFetching(false));
  dispatch(actions.setUsers(data.items));
  dispatch(actions.setTotalUsersCount(data.totalCount));
};

export const follow = (userId: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const data = await usersAPI.follow(userId);
  if (data.resultCode === 0) {
    dispatch(actions.followSuccess(userId));
  }
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const data = await usersAPI.unfollow(userId);
  if (data.resultCode === 0) {
    dispatch(actions.unfollowSuccess(userId));
  }
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export default usersReducer;

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;
