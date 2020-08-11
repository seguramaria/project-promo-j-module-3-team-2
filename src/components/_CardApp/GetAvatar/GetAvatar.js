import React, { Component } from "react";
import "./GetAvatar.css";
import PropTypes from "prop-types";

class GetAvatar extends Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();

    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
    this.getPreview = this.getPreview.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener("load", this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;

    this.props.updateAvatar({
      key: "photo",
      value: image,
    });
  }

  getPreview(image) {
    return image ? { backgroundImage: `url(${image})` } : {};
  }

  render() {
    const { photo } = this.props;

    return (
      <>
        <label htmlFor="image">Imagen de perfil</label>
        <span className="asterisk">*</span>
        <div className="image-wrapper">
          <div className="action">
            <button
              className="btn-img action__upload-btn"
              type="button"
              onClick={this.handleFilePicker}
            >
              Añadir imagen
            </button>

            <input
              type="file"
              key="photo"
              name="photo"
              id="photo"
              ref={this.myFileField}
              className="action__hiddenField"
              onChange={this.uploadImage}
            />
          </div>
          <div className="profile">
            <div
              className="profile__preview "
              style={this.getPreview(photo)}
            ></div>
          </div>
        </div>
      </>
    );
  }
}

GetAvatar.propTypes = {
  isAvatarDefault: PropTypes.bool,
  photo: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
