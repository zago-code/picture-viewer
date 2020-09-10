import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/style/components/Modal.css';

const Modal = (props) => {
  const { isOpen, toggle } = props;
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className='Modal'>
      <div className='Modal__container'>
        <button onClick={toggle} className='Modal__close-button' type='button'>
          X
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

export default Modal;
