import rootReducer from './modules';

import { applyMiddleware, createStore } from 'redux';

export default () => {
  const middleware = [];
  return applyMiddleware(...middleware)(createStore)(rootReducer)
}
