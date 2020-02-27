import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messages.map(m => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageBody = props.state.newMessageBody;

  let onSendMessageClick = () => {};

  let onNewMessageChange = e => {
    let body = e.target.value;
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={newMessageBody}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
