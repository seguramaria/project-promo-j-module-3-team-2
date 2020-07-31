import React from "react";
import "../../index.scss";
import LogoLanding from "../../images/logo-awesome-profile-cards.svg";
import { Link } from "react-router-dom";

const MainLanding = () => {
  return (
    <section className="main">
      <header className="header wrapper">
        <div className="header__logo">
          <a href="./index.html">
            <img
              src={LogoLanding}
              title="Ir a la Home"
              alt="Awesome Profile Cards Logo"
            />
          </a>
        </div>
      </header>
      <div className="front">
        <section className="front__text">
          <h1 className="front__text__title">Crea tu tarjeta de visita</h1>
          <p>
            <span>Crea mejores contactos profesionales de</span>
            <span>forma fácil y cómoda</span>
          </p>
        </section>

        <section className="front__icons">
          <article className="front__icons__design">
            <i className="far fa-object-ungroup icon"></i>
            <p>Diseña</p>
          </article>
          <article className="front__icons__fillin">
            <i className="far fa-keyboard"></i>

            <p>Rellena</p>
          </article>

          <article className="front__icons__share">
            <i className="fa fa-share-alt" aria-hidden="true"></i>
            <p>Comparte</p>
          </article>
        </section>
        <div className="front__button animate__animated animate__pulse">
          {/* <a href="./mainpage.html" title="Ir a comenzar">
            Comenzar
          </a> */}
          <Link to="/cardApp" title="Ir a comenzar">
            Comenzar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainLanding;
