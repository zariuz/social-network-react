import { getAuthUserData } from './auth-reducer';
import { BaseThunkType, InferActionsTypes } from './redux-store';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () =>
    ({
      type: 'INITIALIZED_SUCCESS',
    } as const),
};

export const initializeApp = () => {
  return (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    promise.then(() => {
      dispatch(actions.initializedSuccess());
    });
  };
};

export default appReducer;

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;
