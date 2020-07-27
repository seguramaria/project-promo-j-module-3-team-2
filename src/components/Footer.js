import React from 'react';
import '../index.scss';
import logoadalab from '../images/logo-adalab.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <small className='footer__copyright'>awesome profile-cards@2020</small>
      <a className='footer__logo' href='www.adalab.es' title='logo-adalab'>
        <img
          className='footer__logo--adalab'
          src={logoadalab}
          alt='logo-adalab'
        />
      </a>
    </footer>
  );
};

export default Footer;
