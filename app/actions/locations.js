'use strict';

import {
  SELECT_LOCATION,
  ADD_LOCATION,
  REMOVE_LOCATION
} from './types';

export function selectLocation(latitude, longitude) {
  return {
    type: SELECT_LOCATION,
    location: `${latitude}${longitude}`
  };
}

export function selectDefaultLocation() {
  return (dispatch, getState) => {
    var location = getState().locations[0];
    return dispatch(selectLocation(location.latitude, location.longitude));
  };
}
