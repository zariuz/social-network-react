import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 5 },
  { id: 2, message: "I'ts my first post", likesCount: 3 }
];

let dialogs = [
  { id: 1, name: 'Jeniy' },
  { id: 2, name: 'Dimych' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Vika' }
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your day' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' }
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
