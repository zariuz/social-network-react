import React from 'react';
import { ProfileType } from '../../types/types';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type PropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};

const Profile: React.FC<PropsType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  return (
    <div>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
      />
      <MyPosts />
    </div>
  );
};

export default Profile;
