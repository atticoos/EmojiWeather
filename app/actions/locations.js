'use strict';

import {
  SELECT_LOCATION,
  ADD_LOCATION,
  REMOVE_LOCATION
} from './types';
import {guid} from '../utils/utils';

export function selectLocation(location) {
  return {
    type: SELECT_LOCATION,
    location
  };
}

export function addLocation(location) {
  var id = guid();
  return {
    type: ADD_LOCATION,
    location: {
      id,
      ...location
    }
  };
}
