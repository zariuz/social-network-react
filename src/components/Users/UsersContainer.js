import React from 'react';
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
  toggleIsFetchingAC
} from './../../redux/users-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import preloader from '../../assets/images/preloader.svg';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <div>Hello</div> : <div>By by</div>}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          isFetching={this.props.isFetching}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: pageNamber => {
      dispatch(setCurrentPageAC(pageNamber));
    },
    setTotalUsersCount: totalCount => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
    toggleIsFetching: isFetching => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
