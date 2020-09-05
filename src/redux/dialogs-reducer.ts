const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

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

export type initialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
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

type sendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessageCreator = (
  newMessageBody: string,
): sendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
