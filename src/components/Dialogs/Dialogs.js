import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const AddMessageForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="newMessageBody"
          component="textarea"
          onChange={onNewMessageChange}
          value={newMessageBody}
          placeholder="Enter your message"
        ></Field>
      </div>
      <div>
        <button type="submit" onClick={onSendMessageClick}>
          Send
        </button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: 'dialogAddMessageForm',
})(AddMessageForm);

const Dialogs = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Dialogs;
