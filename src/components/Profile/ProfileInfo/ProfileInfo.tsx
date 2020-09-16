import React, { ChangeEvent, useState } from 'react';
import style from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import ProfileDataFormReduxForm from '../ProfileDataForm/ProfileDataFormReduxForm';
import { ProfileType } from '../../../types/types';

type PropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};

const ProfileInfo: React.FC<PropsType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainFotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData: ProfileType) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  const goToEditMode = () => setEditMode(true);

  return (
    <div>
      <div className={style.description}>
        <div>
          <img src={profile.photos.large || userPhoto} alt="Large avatar" />
          {isOwner && (
            <div>
              <b>Change Avatar: </b>
              <input type="file" onChange={onMainFotoSelected} />
            </div>
          )}
        </div>

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

        {editMode ? (
          <ProfileDataFormReduxForm
            initialValues={profile}
            onSubmit={onSubmit}
            profile={profile}
          />
        ) : (
          <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode} />
        )}
      </div>
    </div>
  );
};

type ProfileDataPropsType = {
  profile: ProfileType;
  isOwner: boolean;
  goToEditMode: () => void;
};

const ProfileData: React.FC<ProfileDataPropsType> = ({
  profile,
  isOwner,
  goToEditMode,
}) => {
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

  return (
    <div>
      <div>Full name: {profile.fullName}</div>
      <div>About me: {profile.aboutMe}</div>
      <div>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
      {profile.lookingForAJob && (
        <div>My professional skills: {profile.lookingForAJobDescription}</div>
      )}

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
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
