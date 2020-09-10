import React, { useState } from 'react';
import ImageModal from './ImageModal';
import '../assets/style/components/Image.css';

const Image = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const { source, title } = props;
  return (
    <>
      <figure className='item__image'>
        <button
          className='image__button'
          type='button'
          onClick={handleToggleModal}
        >
          <img src={source} alt={`foto-${title}`} />
        </button>
      </figure>
      <ImageModal
        isOpen={modalIsOpen}
        toggleModal={handleToggleModal}
        source={source}
        title={title}
      />
    </>
  );
};

export default Image;
