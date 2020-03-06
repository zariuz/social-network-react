import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile">
            <Profile store={props.store} />
          </Route>
          <Route path="/dialogs">
            <DialogsContainer store={props.store} />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/users">
            <UsersContainer store={props.store} />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
