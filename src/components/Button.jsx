import React from 'react';

const Button = (props) => {
  const { clickNext, clickSave, textClass, name } = props;
  return (
    <button
      onClick={(clickNext != null) ? clickNext : clickSave}
      className={textClass}
      type='button'
    >
      {name}
    </button>
  );
};

export default Button;
