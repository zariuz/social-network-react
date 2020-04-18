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
          placeholder="Enter your message"
        ></Field>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: 'dialogAddMessageForm',
})(AddMessageForm);

const Dialogs = (props) => {
  const addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody);
  };

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
