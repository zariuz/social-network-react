const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 5 },
        { id: 2, message: "I'ts my first post", likesCount: 3 },
        { id: 3, message: 'Yo', likesCount: 101 }
      ],
      newPostText: 'Hello world!'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Jeniy' },
        { id: 2, name: 'Dimych' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Vika' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your day' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State is changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

export default store;
