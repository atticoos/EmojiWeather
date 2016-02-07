'use strict';

import {SELECT_LOCATION} from '../actions/types';

export default function selectedLocationReducer(state = null, action) {
  switch(action.type) {
    case SELECT_LOCATION:
      return action.location;
    default:
      return state;
  }
}
