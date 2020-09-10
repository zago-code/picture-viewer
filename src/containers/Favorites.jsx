import React from 'react';
import { connect } from 'react-redux';
import Figures from '../components/Figures';
import RenderList from '../components/RenderListImg';
import '../assets/style/containers/Favorites.css';

const Favorites = (props) => {
  const { favorites } = props;
  // const handleCloseModal = (event) => {
  //   setModalIsOpen(false);
  // };
  // const renderList = (list = []) => {
  //   return (
  //     <>
  //       {list.map((item) => (
  //         <Image
  //           key={item.id}
  //           source={item.source}
  //           title={item.title}
  //           modalIsOpen={modalIsOpen}
  //           onToggleModal={handleToggleModal}
  //         />
  //       ))}
  //     </>
  //   );
  // };
  return (
    <Figures>
      <RenderList list={favorites} />
    </Figures>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
