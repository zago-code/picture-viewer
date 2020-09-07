import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import '../assets/style/containers/HomePages.css';

const HomePages = () => {
  const [images, setImages] = useState({ favorites: [], animals: [] });
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);
  const getSourceForIndex = (index) => ({ ...images.animals[index] });
  const handleClickNext = (event) => {
    if (count === 19) setCount(0);
    else setCount(count + 1);
  };
  const handleClickSave = (event) => {
    console.log('Button save was clicked');
  };
  const { source, title } = getSourceForIndex(count);
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
            clickSave={handleClickSave}
            textClass='button guardar'
            name='Save'
          />
          <Button
            clickNext={handleClickNext}
            textClass='button next'
            name='Next'
          />
        </div>
      </section>
    </>
  );
};

export default HomePages;
