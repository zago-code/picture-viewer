import React from 'react';
import { connect } from 'react-redux';
import Figures from '../components/Figures';
import Image from '../components/Image';
import '../assets/style/containers/Favorites.css';

const Favorites = (props) => {
  const { favorites } = props;
  console.log('length: ', favorites.length);
  const renderList = (list = []) => {
    return (
      <>
        {list.map((item) => (
          <Image key={item.id} source={item.source} title={item.title} />
        ))}
      </>
    );
  };
  return (
    <Figures>
      {renderList(favorites)}
    </Figures>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
