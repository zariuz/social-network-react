import { profileAPI } from '../api/profile-api';
import { stopSubmit, FormAction } from 'redux-form';
import { PostType, ProfileType, PhotosType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 5 },
    { id: 2, message: "I'ts my first post", likesCount: 3 },
    { id: 3, message: 'Yo', likesCount: 101 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
};

const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case 'ADD_POST': {
      const newPost = {
        id: 4,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case 'SET_USER_PROFILE': {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case 'SET_STATUS': {
      return {
        ...state,
        status: action.status,
      };
    }
    case 'DELETE_POST': {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case 'SAVE_PHOTO_SUCCESS': {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  addPostActionCreator: (newPostText: string) =>
    ({
      type: 'ADD_POST',
      newPostText,
    } as const),
  setUserProfile: (profile: ProfileType) =>
    ({
      type: 'SET_USER_PROFILE',
      profile,
    } as const),
  setStatus: (status: string) =>
    ({
      type: 'SET_STATUS',
      status,
    } as const),
  deletePost: (postId: number) =>
    ({
      type: 'DELETE_POST',
      postId,
    } as const),
  savePhotoSuccess: (photos: PhotosType) =>
    ({
      type: 'SAVE_PHOTO_SUCCESS',
      photos,
    } as const),
};

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(actions.setUserProfile(data));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(actions.setStatus(data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(actions.setStatus(status));
    }
  } catch (error) {
    //error handling
  }
};

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (
  dispatch,
  getState,
) => {
  const userId = getState().auth.id;
  const data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) {
    if (userId != null) {
      dispatch(getUserProfile(userId));
    } else {
      throw new Error("userId can't be null");
    }
  } else {
    dispatch(stopSubmit('editProfile', { _error: data.messages[0] }));
    return Promise.reject(data.messages[0]);
  }
};

export default profileReducer;

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>;
