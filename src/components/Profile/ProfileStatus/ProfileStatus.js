import React from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
  return (
    <>
      <div>
        <span>{props.status}</span>
      </div>
      <div>
        <input type="text" value={props.status} />
      </div>
    </>
  );
};

export default ProfileStatus;
