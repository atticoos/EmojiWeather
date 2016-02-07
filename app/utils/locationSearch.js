'use strict';

import Config from '../../env.json';

const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const BASE_AUTOCOMPLETE_URL = `${BASE_URL}/autocomplete/json`;
const BASE_DETAILS_URL = `${BASE_URL}/details/json`;
const STATUS_OK = 'OK';

function makeRequest(endpoint) {
  return fetch(endpoint)
    .then(response => response.json())
    .then(response => {
      if (response.status !== STATUS_OK) {
        throw new Error(`Google Places API returned status ${response.status}`)
      }
      return response;
    });
}

export function fetchAutocompleteResults(query) {
  return makeRequest(`${BASE_AUTOCOMPLETE_URL}?key=${Config.google.ios.key}&input=${query}&types=(cities)&language=en`);
}

export function fetchLocation(placeId) {
  return makeRequest(`${BASE_DETAILS_URL}?key=${Config.google.ios.key}&placeid=${placeId}&language=en`);
}
