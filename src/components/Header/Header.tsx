import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

export type MapPropsType = {
  isAuth: boolean;
  login: string | null;
};
export type DispatchPropsType = {
  logout: () => void;
};

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
  return (
    <header className={s.header}>
      <h3 className={s.name}>Social Network</h3>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out </button>
          </div>
        ) : (
          <NavLink to="/login">Sign in </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
