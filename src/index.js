import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  'loading': {},
  'favorites': [],
  'animals': [
    {
      'id': 1,
      'author': 'SevenStorm',
      'title': 'Reno',
      'year': 2014,
      'source': 'https://images.pexels.com/photos/833418/pexels-photo-833418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 2,
      'author': 'Pixabay',
      'title': 'Buho',
      'year': 2012,
      'source': 'https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 3,
      'author': 'Pixabay',
      'title': 'Elefante',
      'year': 2015,
      'source': 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 4,
      'author': 'George Desipris',
      'title': 'Tiger',
      'year': 2017,
      'source': 'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 5,
      'author': 'PixaBay',
      'title': 'Cachorros-cheeta',
      'year': 2015,
      'source': 'https://images.pexels.com/photos/162318/cheetahs-cubs-two-together-162318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 6,
      'author': 'Lan Jaugense',
      'title': 'Yegua',
      'year': 2017,
      'source': 'https://images.pexels.com/photos/634612/pexels-photo-634612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 7,
      'author': 'Belle Co',
      'title': 'Tortuga',
      'year': 2018,
      'source': 'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 8,
      'author': 'Pixabay',
      'title': 'Petirojo',
      'year': 2014,
      'source': 'https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 9,
      'author': 'Alexas Fotos',
      'title': 'Leon',
      'year': 2017,
      'source': 'https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 10,
      'author': 'PixaBay',
      'title': 'Pato',
      'year': 2012,
      'source': 'https://images.pexels.com/photos/85674/duck-mandarin-ducks-aix-galericulata-duck-bird-85674.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 11,
      'author': 'Frank Cone',
      'title': 'Aguila',
      'year': 2020,
      'source': 'https://images.pexels.com/photos/3908080/pexels-photo-3908080.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 12,
      'author': 'Cindy Gustafson',
      'title': 'Monarca',
      'year': 2013,
      'source': 'https://images.pexels.com/photos/675313/pexels-photo-675313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 13,
      'author': 'Steve',
      'title': 'Lobo',
      'year': 2016,
      'source': 'https://images.pexels.com/photos/682375/pexels-photo-682375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 14,
      'author': 'Julian Kirschner',
      'title': 'Dalmata',
      'year': 2019,
      'source': 'https://images.pexels.com/photos/3117157/pexels-photo-3117157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 15,
      'author': 'PixaBay',
      'title': 'Leopardo',
      'year': 2016,
      'source': 'https://images.pexels.com/photos/51129/leopard-animal-cat-cheetah-51129.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 16,
      'author': 'Alexandru Rotariu',
      'title': 'Labrador',
      'year': 2013,
      'source': 'https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 17,
      'author': 'Elianne Dipp',
      'title': 'Ballena',
      'year': 2016,
      'source': 'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 18,
      'author': 'Frank Cone',
      'title': 'Colibri',
      'year': 2019,
      'source': 'https://images.pexels.com/photos/2629372/pexels-photo-2629372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 19,
      'author': 'Jeremy Bishop',
      'title': 'Delfines',
      'year': 2016,
      'source': 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      'id': 20,
      'author': 'Harvey Sapi',
      'title': 'Elefante',
      'year': 2016,
      'source': 'https://images.pexels.com/photos/1054666/pexels-photo-1054666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
