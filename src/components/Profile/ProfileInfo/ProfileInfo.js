import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../components/common/Preloader/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.description}>
        <img src={props.profile.photos.large} alt="Large avatar" />
        <ProfileStatus />
        <div>Full name: {props.profile.fullName}</div>
        <div>About me: {props.profile.aboutMe}</div>
        <div>
          Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        <div>
          Looking for a job description:{' '}
          {props.profile.lookingForAJobDescription}
        </div>
        <div>
          Contacts:
          {props.profile.contacts.facebook ? (
            <div>Facebook: {props.profile.contacts.facebook}</div>
          ) : null}
          {props.profile.contacts.website ? (
            <div>Website: {props.profile.contacts.website}</div>
          ) : null}
          {props.profile.contacts.vk ? (
            <div>VK: {props.profile.contacts.vk}</div>
          ) : null}
          {props.profile.contacts.twitter ? (
            <div>Twitter: {props.profile.contacts.twitter}</div>
          ) : null}
          {props.profile.contacts.instagram ? (
            <div>Instagram: {props.profile.contacts.instagram}</div>
          ) : null}
          {props.profile.contacts.youtube ? (
            <div>Youtube: {props.profile.contacts.youtube}</div>
          ) : null}
          {props.profile.contacts.github ? (
            <div>Github: {props.profile.contacts.github}</div>
          ) : null}
          {props.profile.contacts.mainLink ? (
            <div>MainLink: {props.profile.contacts.mainLink}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
