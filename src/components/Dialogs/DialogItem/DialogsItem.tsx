import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

type PropsType = {
  id: number;
  name: string;
};

const DialogItem: React.FC<PropsType> = ({ id, name }) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={`${/dialogs/}${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
