import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import Favorites from '../containers/Favorites';
import '../assets/style/App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/Favorites' component={Favorites} />
    </Switch>
  </BrowserRouter>
);

export default App;
