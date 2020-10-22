import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Header.module.css';
import { Link } from 'react-router-dom';
import { Avatar, Button, Col, Row } from 'antd';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { selectIsAuth, selectCurrentUserLogin } from '../../redux/auth-selectors';
import { logout } from '../../redux/auth-reducer';

export type MapPropsType = {};

export const Header: React.FC<MapPropsType> = () => {
  const isAuth = useSelector(selectIsAuth);
  const login = useSelector(selectCurrentUserLogin);

  const dispatch = useDispatch();
  const logoutCallback = () => {
    dispatch(logout());
  };

  const { Header } = Layout;

  return (
    <Header className="header">
      <div className="logo" />
      <Row>
        <Col span={18}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
          </Menu>
        </Col>

        {isAuth ? (
          <>
            <Col span={1}>
              <Avatar
                alt={login || 'user'}
                style={{ backgroundColor: '#87d068' }}
                icon={<UserOutlined />}
              />
            </Col>
            <Col span={5}>
              <Button onClick={logoutCallback}>Log out </Button>
            </Col>
          </>
        ) : (
          <Col span={6}>
            <Button>
              <Link to="/login">Sign in </Link>
            </Button>
          </Col>
        )}
      </Row>
    </Header>
  );
};
