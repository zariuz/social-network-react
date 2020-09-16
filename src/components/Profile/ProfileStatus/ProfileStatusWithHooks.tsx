import React, { useState, useEffect, ChangeEvent } from 'react';

type PropsType = {
  status: string;
  updateStatus: (status: string) => void;
};

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <b>Status: </b>
          <span onDoubleClick={activateEditMode}>{props.status || 'not status'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            type="text"
            value={status}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
