import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../index.scss';

class Profile extends Component {
  render() {
    const { photo } = this.props;
    console.log(this.props.photo);
    return (
      <div className="profile">
        <div
          className="card__photo js-background js__profile-image "
          style={{ background: `url(${photo})` }}
          // className="card__photo js-background js__profile-image"
          // style={{ backgroundImage: photo }}
        ></div>
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

// class Profile extends Component {
//   render() {
//     const {photo} = this.props;
//     return (
//       <div className="profile">
//         <div className="profile__avatar" style={{backgroundImage: `url(${photo})`}}></div>
//       </div>
//     );
//   }
// }

Profile.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default Profile;
