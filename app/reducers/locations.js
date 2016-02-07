'use strict';

import {
  ADD_LOCATION,
  REMOVE_LOCATION
} from '../actions/types';

export default function locationsReducer(state = {}, action) {
  switch(action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        [action.location.id]: action.location
      };
    default:
      return state;
  }
}
