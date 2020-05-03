import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User/User';

const Users = ({
  totalUsersCount,
  pageSize,
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
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <div>
        {users.map((user) => (
          <User
            user={user}
            key={user.id}
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
