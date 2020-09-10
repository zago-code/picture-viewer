import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setFavorite } from '../actions';
import Button from '../components/Button';
import '../assets/style/containers/HomePage.css';

const HomePages = (props) => {
  const { animals } = props;
  const [count, setCount] = useState(0);
  // const [images, setImages] = useState({ favorites: [], animals: [] });
  // useEffect(() => {
  //   fetch('http://localhost:3000/initialState')
  //     .then((response) => response.json())
  //     .then((data) => setImages(data))
  //     .catch((error) => console.error(error));
  // }, []);
  const getSourceForIndex = (index) => ({ ...animals[index] });
  const handleClickNext = () => {
    if (count === 19) setCount(0);
    else setCount(count + 1);
  };
  const { source, title } = getSourceForIndex(count);
  const handleClickSave = () => {
    console.log('Button save was clicked');
    props.setFavorite(getSourceForIndex(count));
  };
  return (
    <>
      <section className='viewer__container'>
        <figure className='viewer__image'>
          <img
            src={source}
            alt={`ìmagen-${title}`}
          />
        </figure>
        <div className='button__container'>
          <Button
            clickSave={handleClickSave}
            textClass='button guardar'
            name='Save'
          />
          <Button
            clickNext={handleClickNext}
            textClass='button next'
            name='Next'
          />
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    animals: state.animals,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePages);
