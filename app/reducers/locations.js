'use strict';

import {
  ADD_LOCATION,
  REMOVE_LOCATION
} from '../actions/types';

const initialState = [
  {
    latitude: 42.3601,
    longitude: -71.0589,
    name: 'Boston',
    state: 'MA'
  }
];

export default function locationsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_LOCATION:
      return [
        ...state,
        action.location
      ];
    default:
      return state;
  }
}
