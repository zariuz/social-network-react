import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4TvQ7rOT-gQz760CzOvy7GWilc8avcFAgv2MleFeMaF8dOBkH"></img>
      </div>
      <div>ava + desc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
