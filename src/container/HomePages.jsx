import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import '../assets/style/containers/HomePages.css';

const HomePages = () => {
  const [image, setImages] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/animals')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);
  const { source, id } = { ...image[10] };
  console.log(id);
  return (
    <>
      <Header />
      <section className='viewer__container'>
        <figure className='viewer__image'>
          <img
            src={source}
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
