import React from "react";
import "../stylesheets/_header.scss";
import logo from "../images/logo-awesome-profile-cards.svg";

class Header extends React.Component {
  render() {
    return (
      <header class="header__card">
        <div class="header__card__logo">
          <a href="./index.html">
            <img
              src={logo}
              title="Ir a la Home"
              alt="Awesome Profile Cards Logo"
            />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
