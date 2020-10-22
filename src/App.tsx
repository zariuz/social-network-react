import React, { Component, lazy } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { UsersPage } from './components/Users/UsersPage';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Header } from './components/Header/Header';
import { LoginPage } from './components/Login/LoginPage';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import NotFound from './components/NotFound/NotFound';
import { AppStateType } from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const SuspendedDialogs = withSuspense(DialogsContainer);

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

class App extends Component<MapPropsType & DispatchPropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    const { SubMenu } = Menu;
    const { Content, Footer, Sider } = Layout;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}>
                <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                  <Menu.Item key="1">
                    <Link to="/profile">Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/dialogs">Messages</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="All Users">
                  <Menu.Item key="5">
                    <Link to="/users">Users</Link>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="12">
                  <Link to="/news">News</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/profile" />} />
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/dialogs" render={() => <SuspendedDialogs />} />
                <Route path="/users" render={() => <UsersPage pageTitle={'Users'} />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/login" render={() => <LoginPage />} />
                <Route path="*" render={() => <NotFound />} />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Social Network ©2020 Created by Evgeniy Nechetov
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { initializeApp }),
  withRouter,
)(App);
