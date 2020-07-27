import React from "react";
import "../../index.scss";
import Collapse from "./_Form/Collapse";
import Inputs from "./_Form/Inputs";

const Form = () => {
  return (
    <section className="form">
      <div className="wrapper">
        <form className="js-form">
          {/* DESIGN */}
          <Collapse icon="far fa-object-ungroup icon" title="Diseña">
            <div className="colors-container">
              <span className="form__design__subtitle">colores</span>
              <div className="styles">
                <div className="form__design__style1">
                  <label className="style-blue">
                    <div className="option">
                      <input
                        id="style1"
                        type="radio"
                        value="green"
                        name="style"
                        className="js-input-blue"
                        required
                        checked
                      />
                    </div>
                    <div className="colors">
                      <div className="square one"></div>
                      <div className="square two"></div>
                      <div className="square three"></div>
                    </div>
                  </label>
                </div>
                <div className="form__design__style2">
                  <label className="style-red">
                    <div className="option">
                      <input
                        id="style2"
                        type="radio"
                        value="red"
                        name="style"
                        className="js-input-red"
                        required
                      />
                    </div>
                    <div className="colors">
                      <div className="square one"></div>
                      <div className="square two"></div>
                      <div className="square three"></div>
                    </div>
                  </label>
                </div>
                <div className="form__design__style3">
                  <label className="style-yellow">
                    <div className="option">
                      <input
                        id="style3"
                        type="radio"
                        value="colorMix"
                        name="style"
                        className="js-input-yellow"
                        required
                      />
                    </div>
                    <div className="colors">
                      <div className="square one"></div>
                      <div className="square two"></div>
                      <div className="square three"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </Collapse>
          {/* FILL */}
          <Collapse title="Rellena" icon="far fa-keyboard icon">
            <section className="form__section">
              <div className="form__section__signup ">
                <Inputs />
                <label htmlFor="job">Puesto</label>
                <span className="asterisk">*</span>
                <input
                  className="js-input js-job"
                  placeholder="Ej: Front-end"
                  id="job"
                  type="text"
                  name="job"
                  required
                />
                <label htmlFor="image">Imagen de perfil</label>
                <span className="asterisk">*</span>
                <div className="image-wrapper">
                  <div className="action">
                    <button
                      className="btn-img action__upload-btn js__profile-trigger"
                      id="photo"
                      href="#"
                    >
                      Añadir imagen
                    </button>
                    <input
                      className="action__hiddenField js__profile-upload-btn"
                      id="image"
                      type="file"
                      name="image"
                      required
                    />
                  </div>
                  <div className="profile">
                    <div className="profile__preview js__profile-preview"></div>
                  </div>
                </div>
                <label htmlFor="email">Email</label>
                <span className="asterisk">*</span>
                <input
                  className="js-input js-email"
                  placeholder="Ej: merche@gmail.com"
                  id="email"
                  type="email"
                  name="email"
                  required
                />
                <label htmlFor="phone">Teléfono</label>
                <span className="asterisk">*</span>
                <input
                  className="js-input js-phone"
                  placeholder="Ej: 779744561"
                  id="phone"
                  type="number"
                  name="phone"
                  pattern="[0-9]{9,15}"
                />
                <label htmlFor="linkedin">Linkedin</label>
                <span className="asterisk">*</span>
                <input
                  className="js-input js-linkedin"
                  placeholder="Ej: merche"
                  id="linkedin"
                  type="text"
                  name="linkedin"
                />
                <label htmlFor="github">Github</label>
                <span className="asterisk">*</span>
                <input
                  className="js-input js-github github"
                  placeholder="Ej: merchelios"
                  id="github"
                  type="text"
                  name="github"
                />
              </div>
            </section>
          </Collapse>

          {/* SHARE */}
          <Collapse icon="fa fa-share-alt icon" title="Comparte">
            <section className="form__share">
              <div className="form__share__button ">
                <button
                  type="submit"
                  value="Enviar"
                  className="js-share share form__share__button__button inactive"
                >
                  <i className="far fa-address-card"></i>
                  crear tarjeta
                </button>
              </div>
              <div className="js-input js-twitter twitter ">
                <p className="js-twiter-paragraph twitter-paragraph">
                  ✨ Aquí tienes tu tarjeta de visita Sailor Code ✨
                </p>
                <a
                  href="https://twitter.com/login"
                  className="js-twitter-url twitter-url response"
                >
                  https://twitter.com/login
                </a>
                <a
                  className="twitter-share-button"
                  href="https://twitter.com/intent/tweet"
                >
                  <button className="js-twitter-button twitter-button">
                    <span className="twitter-link">
                      <i className="fab fa-twitter"></i>
                      Compartir en twitter
                    </span>
                  </button>
                </a>
              </div>
            </section>
          </Collapse>
        </form>
      </div>
    </section>
  );
};

export default Form;
