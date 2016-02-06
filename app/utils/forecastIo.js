'use strict';

import Config from '../../env.json';

const BASE_URL = `https://api.forecast.io/forecast/${Config.forecast.key}`;

const toJson = response => response.json();

export function getWeatherForLatLng(lat, lng) {
  return fetch(`${BASE_URL}/${lat},${lng}`).then(toJson);
}
