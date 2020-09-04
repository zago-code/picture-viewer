import React from 'react';

const Button = (props) => {
  const { textClass, name } = props;
  return (
    <button className={textClass} type='button'>
      {name}
    </button>
  );
};

export default Button;
