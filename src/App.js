import React, { Component, Suspense, lazy } from 'react';
import { compose } from 'redux';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import NotFound from './components/NotFound/NotFound';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/profile" />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

            <Route path="/dialogs">
              <Suspense fallback={<div>Загрузка...</div>}>
                <DialogsContainer />
              </Suspense>
            </Route>

            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/settings" render={() => <News />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="*" render={() => <NotFound />} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, { initializeApp }), withRouter)(App);
