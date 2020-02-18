import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4TvQ7rOT-gQz760CzOvy7GWilc8avcFAgv2MleFeMaF8dOBkH"></img>
      </div>
      <div className={s.description}>ava + desc</div>
    </div>
  );
};

export default ProfileInfo;
