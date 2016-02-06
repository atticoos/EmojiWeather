'use strict';

import {USER_LOCATION} from './types';

export default function userLocationReducer(state = null, action) {
  switch(action.type) {
    case USER_LOCATION:
      if (!state || state.latitude !== action.latitude || state.longitud !== action.longitude) {
        return {
          action.latitude,
          action.longitude
        };
      }
      return state;
    default:
      return state;
  }
}
