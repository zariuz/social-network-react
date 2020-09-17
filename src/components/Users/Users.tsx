import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Pagination from '../common/Pagination/Pagination';
import User from './User/User';
import { UserType } from '../../types/types';

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  portionSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
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
  users,
  followingInProgress,
  unfollow,
  follow,
}) => {
  return (
    <div>
      <UsersSearchForm />
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

const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

const UsersSearchForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={usersSearchFormValidate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Users;
