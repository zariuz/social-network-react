import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
  refreshprofile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshprofile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshprofile();
    }
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
