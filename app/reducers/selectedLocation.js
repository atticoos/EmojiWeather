'use strict';

import {SELECT_LOCATION} from '../actions/types';

export default function selectedLocationReducer(state = null, action) {
  switch(action.type) {
    case SELECT_LOCATION:
      if (!state || state.latitude !== action.latitude && state.longitude !== action.longitude) {
        return {
          latitude: action.latitude,
          longitude: action.longitude
        };
      }
      return state;
    default:
      return state;
  }
}
