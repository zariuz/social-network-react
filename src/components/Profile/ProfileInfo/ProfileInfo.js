import React from 'react';
import style from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import Preloader from '../../../components/common/Preloader/Preloader';
import ProfileStatusWithHooks from './../ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const {
    facebook,
    website,
    vk,
    twitter,
    instagram,
    youtube,
    github,
    mainLink,
  } = profile.contacts;

  const onMainFotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={style.description}>
        <div>
          <img src={profile.photos.large || userPhoto} alt="Large avatar" />
          {isOwner && <input type="file" onChange={onMainFotoSelected} />}
        </div>

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

        <div>Full name: {profile.fullName}</div>
        <div>About me: {profile.aboutMe}</div>
        <div>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
        <div>
          Looking for a job description: {profile.lookingForAJobDescription}
        </div>
        <div>
          Contacts:
          {facebook ? <div>Facebook: {facebook}</div> : null}
          {website ? <div>Website: {website}</div> : null}
          {vk ? <div>VK: {vk}</div> : null}
          {twitter ? <div>Twitter: {twitter}</div> : null}
          {instagram ? <div>Instagram: {instagram}</div> : null}
          {youtube ? <div>Youtube: {youtube}</div> : null}
          {github ? <div>Github: {github}</div> : null}
          {mainLink ? <div>MainLink: {mainLink}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
