import React from 'react';
import '../assets/style/components/Figures.css';

const Figures = ({ children }) => {
  return (
    <>
      <section className='favorites__container'>
        <div className='favorites__images'>
          {children}
        </div>
      </section>
    </>
  );
};

export default Figures;
