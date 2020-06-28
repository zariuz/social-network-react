import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

export type initialStateType = {
  initialized: boolean;
};

const initialState: initialStateType = {
  initialized: false,
};

type initializedSuccessType = {
  type: typeof INITIALIZED_SUCCESS;
};

const appReducer = (state: initialStateType = initialState, action: any): initialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = (): initializedSuccessType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => {
  return (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    promise.then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
