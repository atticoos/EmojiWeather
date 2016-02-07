'use strict';

import {GET_WEATHER} from './types';
import {CURRENT_LOCATION} from '../constants/geo';
import {getWeatherForLatLng} from '../utils/forecastIo';

export function getWeather(locationId) {
  return {
    type: GET_WEATHER,
    payload: {location: locationId},
    request: (state) => {
      var location;
      if (locationId === CURRENT_LOCATION) {
        location = state.userLocation;
      } else {
        location = state.locations[locationId];
      }

      return getWeatherForLatLng(location.latitude, location.longitude);
    }
  };
}
