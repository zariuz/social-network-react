import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = props => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={`${/dialogs/}${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: 'Jeniy' },
    { id: 2, name: 'Dimych' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Vika' }
  ];

  let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your day' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name="Dimych" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Vika" id="5" />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message="How is your day" />
        <Message message="Yo" />
        <Message message="Yo" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
