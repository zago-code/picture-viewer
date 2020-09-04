import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import '../assets/style/containers/HomePages.css';

const HomePages = () => {
  return (
    <>
      <Header />
      <section className='viewer__container'>
        <figure className='viewer__image'>
          <img
            src='https://images.pexels.com/photos/833418/pexels-photo-833418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='foto-animal'
          />
        </figure>
        <div className='button__container'>
          <Button
            textClass='button guardar'
            name='Save'
          />
          <Button
            textClass='button next'
            name='Next'
          />
        </div>
      </section>
    </>
  );
};

export default HomePages;
