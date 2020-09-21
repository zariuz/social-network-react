import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User/User';
import { UserType } from '../../types/types';
import { FilterType } from '../../redux/users-reducer';
import { UsersSearchForm } from './UsersSearchForm';

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  portionSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  onFilterChanged: (filter: FilterType) => void;
  users: UserType[];
  followingInProgress: number[];
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

const Users: React.FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  portionSize,
  currentPage,
  onPageChanged,
  onFilterChanged,
  users,
  followingInProgress,
  unfollow,
  follow,
}) => {
  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChanged} />
      <Pagination
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        portionSize={portionSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <div>
        {users.map((user, index) => (
          <User
            user={user}
            index={index}
            followingInProgress={followingInProgress}
            unfollow={unfollow}
            follow={follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
