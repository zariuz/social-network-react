import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { required, maxLengthCreator } from '../../utilities/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import { initialStateType } from '../../redux/dialogs-reducer';

const maxLength10 = maxLengthCreator(10);

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType>> = ({
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          type="textarea"
          name="newMessageBody"
          placeholder="Enter your message"
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm<NewMessageFormType>({
  form: 'dialogAddMessageForm',
})(AddMessageForm);

type NewMessageFormType = {
  newMessageBody: string;
};

type PropsType = {
  sendMessage: (messageText: string) => void;
  dialogsPage: initialStateType;
};

const Dialogs: React.FC<PropsType> = ({ sendMessage, dialogsPage }) => {
  const addNewMessage = (values: NewMessageFormType) => {
    sendMessage(values.newMessageBody);
  };

  let state = dialogsPage;

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
