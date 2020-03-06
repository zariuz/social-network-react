import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

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
    sidebar: {},
    usersPage: {
      users: [
        {
          id: 1,
          fullName: 'Jeniy',
          status: 'I am a boss',
          location: { city: 'SPb', country: 'Russia' }
        },
        {
          id: 2,
          fullName: 'Dimych',
          status: 'I am a boss too',
          location: { city: 'Minsk', country: 'Belarus' }
        },
        {
          id: 3,
          fullName: 'Sveta',
          status: 'I am a student',
          location: { city: 'Moscow', country: 'Russia' }
        },
        {
          id: 4,
          fullName: 'Sasha',
          status: 'I am a student',
          location: { city: 'Kiev', country: 'Ukraine' }
        },
        {
          id: 5,
          fullName: 'Vika',
          status: 'I am a student',
          location: { city: 'SPb', country: 'Russia' }
        }
      ]
    }
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
