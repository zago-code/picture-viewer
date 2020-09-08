import React from 'react';
import '../assets/style/containers/NotFound.css';

const NotFound = () => {
  return (
    <div className='NF__container'>
      <h1 className='H1-NotFound'>404 Not Found</h1>
      <p className='zoom-area'>
        <b>CSS</b>
        {' '}
        animations to make a cool 404 page.
        {' '}
      </p>
      <section className='error-container'>
        <span>4</span>
        <span><span className='screen-reader-text'>0</span></span>
        <span>4</span>
      </section>
      {/* <div className='link-container'>
        <a href='https://www.silocreativo.com/en/creative-examples-404-error-css/' className='more-link'>Visit the original article</a>
      </div> */}
    </div>
  );
};

export default NotFound;
