import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo-pic-viewer.png';
import '../assets/style/components/Header.css';

const Header = () => {
  return (
    <nav>
      <div className='nav-logo__container'>
        <Link to='/'>
          <img src={logo} alt='Logo del viewer' />
        </Link>
      </div>
      <div className='ntoavorFtes__conr'>
        <Link to='./Favorites'>Favoritos</Link>
      </div>
    </nav>
  );
};

export default Header;

