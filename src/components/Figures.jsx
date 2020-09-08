import React from 'react';

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
