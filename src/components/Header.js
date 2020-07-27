import React from 'react';
import '../index.scss';
import logoawesome from '../images/logo-awesome-profile-cards.svg';

const Header = () => {
  return (
    <header className='header__card'>
      <div className='header__card__logo'>
        <a href='./index.html'>
          <img
            src={logoawesome}
            title='Ir a la Home'
            alt='Awesome Profile Cards Logo'
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
