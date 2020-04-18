const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { id: 10, name: 'Jeniy' },
    { id: 11, name: 'Dimych' },
    { id: 12, name: 'Sveta' },
    { id: 13, name: 'Sasha' },
    { id: 14, name: 'Vika' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your day' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
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

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
