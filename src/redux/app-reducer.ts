import { getAuthUserData } from './auth-reducer';
import { InferActionsTypes } from './redux-store';

const initialState = {
  initialized: false,
};

export type initialStateType = typeof initialState;

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

type ActionsTypes = InferActionsTypes<typeof actions>;

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
