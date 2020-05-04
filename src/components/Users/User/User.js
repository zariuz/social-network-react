import React from 'react';
import style from './User.module.css';
import userPhoto from '../../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const User = ({ followingInProgress, unfollow, follow, user, index }) => {
  return (
    <div key={index}>
      <span>
        <div className={style.avatar}>
          <NavLink to={'/profile/' + user.id}>
            <img
              alt="Avatar"
              src={user.photos.small != null ? user.photos.small : userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
