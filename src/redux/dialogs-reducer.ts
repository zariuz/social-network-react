import { InferActionsTypes } from './redux-store';

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  message: string;
};

let initialState = {
  dialogs: [
    { id: 10, name: 'Jeniy' },
    { id: 11, name: 'Dimych' },
    { id: 12, name: 'Sveta' },
    { id: 13, name: 'Sasha' },
    { id: 14, name: 'Vika' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your day' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
  ] as Array<MessageType>,
};

const dialogsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case 'SEND_MESSAGE': {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    }
    default:
      return state;
  }
};

export const actions = {
  sendMessage: (newMessageBody: string) =>
    ({
      type: 'SEND_MESSAGE',
      newMessageBody,
    } as const),
};

export default dialogsReducer;

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
