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

  let dialogsElements = dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messages.map(m => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
