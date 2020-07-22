import React from "react";
import "../stylesheets/_footer.scss";
import logo from "../images/logo-adalab.png";

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <small class="footer__copyright">awesome profile-cards@2020</small>
        <a class="footer__logo" href="#" title="logo-adalab">
          <img class="footer__logo--adalab" src={logo} alt="logo-adalab" />
        </a>
      </footer>
    );
  }
}

export default Footer;
