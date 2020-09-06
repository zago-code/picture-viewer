import React from 'react';
import logo from '../assets/static/logo-pic-viewer.png';
import '../assets/style/components/Header.css';

const Header = () => {
  return (
    <nav>
      <div className='nav-logo__container'>
        <a href='index.html'>
          <img src={logo} alt='Logo del viewer' />
        </a>
      </div>
      <div className='nav-favorites__container'>
        <a href='./favorites.html'>Favoritos</a>
      </div>
    </nav>
  );
};

export default Header;

