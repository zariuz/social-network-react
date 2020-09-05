import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
