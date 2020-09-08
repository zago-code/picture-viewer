import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../containers/HomePage';
import Favorites from '../containers/Favorites';
import NotFound from '../containers/NotFound';
import '../assets/style/App.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Favorites' component={Favorites} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
