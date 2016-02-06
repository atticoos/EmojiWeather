'use strict';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import asyncMiddleware from './asyncMiddleware';

const createStoreWithMiddleware = applyMiddleware(
  createLogger({
    predicate: () => __DEV__
  }),
  thunk,
  asyncMiddleware
)(createStore);

const store = createStoreWithMiddleware(combineReducers(reducers));

export default store;
