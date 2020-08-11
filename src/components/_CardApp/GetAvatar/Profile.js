import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../../index.scss";

class Profile extends Component {
  render() {
    const { photo } = this.props;
    return (
      <div
        className={"card__photo " + this.props.backgroundClass}
        style={photo === "" ? {} : { backgroundImage: `url("${photo}")` }}
        id="photo"
      ></div>
    );
  }
}

Profile.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default Profile;
