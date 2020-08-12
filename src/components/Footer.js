import React from 'react';
import '../index.scss';
import logobanana from '../images/bananasprint-logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <small className='footer__copyright'>Banana-Sprint @2020</small>
      <a className='footer__logo' href='www.adalab.es' title='logo-adalab'>
        <img
          className='footer__logo--adalab'
          src={logobanana}
          alt='logo-adalab'
        />
      </a>
    </footer>
  );
};

export default Footer;
