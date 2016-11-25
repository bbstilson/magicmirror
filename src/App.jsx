import Routes from './Routes';
import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux/create';

export default () => (
  <Provider store={createStore()}>
    <Routes />
  </Provider>
);
