import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

class Profile extends Component {
  render() {
    const { avatar } = this.props;

    return (
      <div className="card__photo">
        <div className="card__photo js-background js__profile-image"></div>
      </div>
    );
  }
}

// <div className={
//               'card__photo js-background js__profile-image ' +
//               palettes[styleToNumber].background
//             }
//             id="photo"
//           ></div>

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
