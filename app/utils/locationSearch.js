'use strict';

import Config from '../../env.json';

const BASE_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
const STATUS_OK = 'OK';

export function fetchAutocompleteResults(query) {
  return fetch(`${BASE_URL}?key=${Config.google.ios.key}&input=${query}&types=(cities)&language=en`)
    .then(response => response.json())
    .then(response => {
      if (response.status !== STATUS_OK) {
        throw new Error(`Google Places API search returned status ${response.status}`)
      }
      return response;
    });
}
