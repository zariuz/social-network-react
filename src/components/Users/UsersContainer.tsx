import React, { Component } from 'react';
import { follow, unfollow, requestUsers } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
  getUsers,
  getPageSize,
  getPortionSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from '../../redux/users-selectors';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStatePorpsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  portionSize: number;
  totalUsersCount: number;
  users: UserType[];
  followingInProgress: number[];
};

type MapDispatchPorpsType = {
  requestUsers: (currentPage: number, pageSize: number) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

type PorpsType = MapStatePorpsType & MapDispatchPorpsType;

class UsersContainer extends Component<PorpsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
          portionSize={this.props.portionSize}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePorpsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    portionSize: getPortionSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose<React.ComponentType>(
  //connect<MapStatePorpsType, MapDispatchPorpsType, AppStateType>({})
  connect(mapStateToProps, {
    follow,
    unfollow,
    requestUsers,
  }),
  withAuthRedirect,
)(UsersContainer);
