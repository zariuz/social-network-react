import React from 'react';
import s from './ProfileStatus.module.css';
//import { updateStatus } from './../../../redux/profile-reducer';

class ProfileStatus extends React.Component {
  statusInputRef = React.createRef();

  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus();
  };

  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              type="text"
              value={this.props.status}
              ref={this.statusInputRef}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
