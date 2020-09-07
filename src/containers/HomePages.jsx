import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import '../assets/style/containers/HomePages.css';

const HomePages = () => {
  const [images, setImages] = useState({ favorites: [], animals: [] });
  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);
  const getSourceForIndex = (index) => ({ ...images.animals[index] });
  console.log(getSourceForIndex(1));
  const { source, title } = getSourceForIndex(7);
  return (
    <>
      <Header />
      <section className='viewer__container'>
        <figure className='viewer__image'>
          <img
            src={source}
            alt={`ìmagen-${title}`}
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
