import React from "react";
import "../../index.scss";
import logoawesome from "../../images/logo-awesome-profile-cards.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header__card">
      <div className="header__card__logo">
        {/* <a href="./index.html">
          <img
            src={logoawesome}
            title="Ir a la Home"
            alt="Awesome Profile Cards Logo"
          />
        </a> */}
        <Link to="/" title="Home">
          <img
            src={logoawesome}
            title="Ir a la Home"
            alt="Awesome Profile Cards Logo"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
