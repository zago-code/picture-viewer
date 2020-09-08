import React from 'react';
import { connect } from 'react-redux';
import '../assets/style/containers/Favorites.css';

const Favorites = (props) => {
  const { favorites } = props;
  console.log(favorites);
  return (
    <>
      <section className='favorites__container'>
        <div className='favorites__images'>
          <figure className='item__image'>
            <a href='/'>
              <img src='https://images.pexels.com/photos/833418/pexels-photo-833418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='foto-animal' />
            </a>
          </figure>
          <figure className='item__image'>
            <a href='/'>
              <img src='https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='foto-animal' />
            </a>
          </figure>
          <figure className='item__image'>
            <a href='/'>
              <img src='https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='foto-animal' />
            </a>
          </figure>
          <figure className='item__image'>
            <a href='/'>
              <img src='https://images.pexels.com/photos/833418/pexels-photo-833418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='foto-animal' />
            </a>
          </figure>
          <figure className='item__image'>
            <a href='/'>
              <img src='https://images.pexels.com/photos/833418/pexels-photo-833418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='foto-animal' />
            </a>
          </figure>
          <figure className='item__image'>
            <a href='/'>
              <img src='https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='foto-animal' />
            </a>
          </figure>
          <figure className='item__image'>
            <a href='/'>
              <img src='https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='foto-animal' />
            </a>
          </figure>
          <figure className='item__image'>
            <a href='/'>
              <img src='https://images.pexels.com/photos/833418/pexels-photo-833418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='foto-animal' />
            </a>
          </figure>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
