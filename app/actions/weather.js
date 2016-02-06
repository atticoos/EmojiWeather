'use strict';

import {
  GET_WEATHER
} from './types';

import {getWeatherForLatLng} from '../utils/forecastIo';

export function getWeather() {
  return {
    type: GET_WEATHER,
    request: (state) => {
      var location = state.locations[0];
      return getWeatherForLatLng(location.latitude, location.longitude);
    }
  };
}
