import React from "react";
import "../../index.scss";

const CardPreview = () => {
  return (
    <section className="imagen">
      <div>
        <button className="button__reset js-reset-button">
          <img className="img-button" src="./assets/images/basura.svg" alt="" />
          <p className="button__reset--word">reset</p>
        </button>

        <div className="card">
          <div className="card__top">
            <div className="js-square card__top__square-color"></div>
            <div className="card__top__title">
              <div className="js-name-print card__top__title__name">
                nombre apellido
              </div>
              <div className="js-role card__top__title__role">
                Front-end developer
              </div>
            </div>
          </div>
          <div
            className="card__photo js-background js__profile-image"
            id="photo"
          ></div>
          <div className="card__bottom">
            <ul className="card__bottom__list">
              <li className="card__bottom__list__li js-border js-background-phone">
                <a href="" target="_blank" className="js-phone-icon">
                  <i className="js-icon icon fas fa-mobile-alt"></i>
                </a>
              </li>
              <li className="js-border js-background-email card__bottom__list__li">
                <a href="mailto:" target="_blank" className="js-email-icon">
                  <i className="js-icon icon far fa-envelope"></i>
                </a>
              </li>
              <li className="js-border js-background-linkedin card__bottom__list__li">
                <a
                  href=""
                  target="_blank"
                  className="js-linkedin-email js-linkedin-print"
                >
                  <i className="js-icon icon fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="js-border js-background-github card__bottom__list__li">
                <a href="" target="_blank" className="js-github-print">
                  <i className="js-icon icon fab fa-github-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPreview;
