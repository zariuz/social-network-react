import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User/User';

const Users = ({
  totalUsersCount,
  pageSize,
  portionSize,
  currentPage,
  onPageChanged,
  users,
  followingInProgress,
  unfollow,
  follow,
}) => {
  return (
    <div>
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
