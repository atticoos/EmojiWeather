'use strict';

import {USER_LOCATION} from '../actions/types';

export default function userLocationReducer(state = null, action) {
  switch(action.type) {
    case USER_LOCATION:
      console.log('user location reducer', state, action);
      if (!state || state.latitude !== action.latitude || state.longitude !== action.longitude) {
        return {
          latitude: action.latitude,
          longitude: action.longitude,
          name: action.name,
          state: action.state
        };
      }
      return state;
    default:
      return state;
  }
}
