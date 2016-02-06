'use strict';

import {GET_WEATHER} from '../actions/types';

export default function weatherReducer(state = {}, action) {
  if (action.status !== 'success') {
    return state;
  }
  switch(action.type) {
    case GET_WEATHER:
      let {latitude, longitude} = action.response;
      return {
        ...state,
        [`${latitude}${longitude}`]: action.response
      };
    default:
      return state;
  }
}
