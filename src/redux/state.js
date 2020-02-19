let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 5 },
      { id: 2, message: "I'ts my first post", likesCount: 3 },
      { id: 3, message: 'Yo', likesCount: 101 }
    ]
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
    ]
  },
  sidebar: {}
};

export default state;
