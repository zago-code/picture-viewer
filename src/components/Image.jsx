import React from 'react';

const Image = (props) => {
  // console.log(props);
  const { source, title } = props;
  // console.log(`source: ${source} y title: ${title}`);
  return (
    <figure className='item__image'>
      <a href='/'>
        <img src={source} alt={`foto-${title}`} />
      </a>
    </figure>
  );
};

export default Image;
