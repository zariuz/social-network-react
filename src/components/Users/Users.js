import React from 'react';
import s from './Users.module.css';

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://vectorified.com/images/avatar-icon-png-29.png',
        followed: true,
        fullName: 'Jeniy',
        status: 'I am a boss',
        location: { city: 'SPb', country: 'Russia' }
      },
      {
        id: 2,
        photoUrl: 'https://vectorified.com/images/avatar-icon-png-29.png',
        followed: false,
        fullName: 'Dimych',
        status: 'I am a boss too',
        location: { city: 'Minsk', country: 'Belarus' }
      },
      {
        id: 3,
        photoUrl: 'https://vectorified.com/images/avatar-icon-png-29.png',
        followed: false,
        fullName: 'Sveta',
        status: 'I am a student',
        location: { city: 'Moscow', country: 'Russia' }
      },
      {
        id: 4,
        photoUrl: 'https://vectorified.com/images/avatar-icon-png-29.png',
        followed: false,
        fullName: 'Sasha',
        status: 'I am a student',
        location: { city: 'Kiev', country: 'Ukraine' }
      },
      {
        id: 5,
        photoUrl: 'https://vectorified.com/images/avatar-icon-png-29.png',
        followed: true,
        fullName: 'Vika',
        status: 'I am a student',
        location: { city: 'SPb', country: 'Russia' }
      }
    ]);
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div className={s.avatar}>
              <img alt="Avatar" src={u.photoUrl} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
