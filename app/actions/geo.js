'use strict';

import {USER_LOCATION} from './types';
import {coordinateToPrecision} from '../utils/geo';

function setUserLocation (latitude, longitude) {
  return {
    type: USER_LOCATION,
    latitude,
    longitude
  }
}

export function locateUser() {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var {latitude, longitude} = position.coords;
        dispatch(setUserLocation(
          coordinateToPrecision(latitude),
          coordinateToPrecision(longitude)
        ));
      }
    );
  }
}
