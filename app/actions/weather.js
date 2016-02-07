'use strict';

import {
  GET_WEATHER
} from './types';

import {getWeatherForLatLng} from '../utils/forecastIo';

export function getWeather() {
  return {
    type: GET_WEATHER,
    request: (state) => {
      var location = state.selectedLocation;
      return getWeatherForLatLng(location.latitude, location.longitude);
    }
  };
}
