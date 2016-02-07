'use strict';

import Geocoder from 'react-native-geocoder';
import {USER_LOCATION} from './types';
import {coordinateToPrecision} from '../utils/geo';
import {selectLocation} from './locations';
import {getWeather} from './weather';

function setUserLocation (latitude, longitude, name, state) {
  return {
    type: USER_LOCATION,
    latitude,
    longitude,
    name,
    state
  };
}

export function locateUser() {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var {latitude, longitude} = position.coords;
        Geocoder.reverseGeocodeLocation({
          latitude, longitude
        }, (err, data) => {
          var name = 'Unknown';
          var state = null;
          if (!err && data.length > 0) {
            name = data[0].locality;
            state = data[0].administrativeArea;
          }
          dispatch(setUserLocation(
            coordinateToPrecision(latitude),
            coordinateToPrecision(longitude),
            name,
            state
          ));
          dispatch(selectLocation(
            coordinateToPrecision(latitude),
            coordinateToPrecision(longitude)
          ));
          dispatch(getWeather());
        });
      },
      (error) => {
        console.log('cant determine location', error);
      }
    );
  }
}
