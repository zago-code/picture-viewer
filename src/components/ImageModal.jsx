import React from 'react';

import '../assets/style/components/ImageModal.css';
import Modal from './Modal';

const ImageModal = (props) => {
  const { isOpen, toggleModal, source, title } = props;
  return (
    <Modal isOpen={isOpen} toggle={toggleModal}>
      <div className='ImageModal'>
        <img src={source} alt={title} />
      </div>
    </Modal>
  );
};

export default ImageModal;
