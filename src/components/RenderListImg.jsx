import React from 'react';
import Image from './Image';

const RenderListImg = (props) => {
  const { list } = props;
  return (
    <>
      {list.map((item) => (
        <Image
          key={item.id}
          source={item.source}
          title={item.title}
          // modalIsOpen={modalIsOpen}
          // onToggleModal={handleToggleModal}
        />
      ))}
    </>
  );
};

export default RenderListImg;
