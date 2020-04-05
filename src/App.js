import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?">
            <ProfileContainer store={props.store} />
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
          <Route path="/login">
            <Login />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
