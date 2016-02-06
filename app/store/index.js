'use strict';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  createLogger({
    predicate: () => __DEV__
  }),
  thunk
)(createStore);

const store = createStoreWithMiddleware(combineReducers(reducers));

export default store;
