'use strict';

import {SEARCH_LOCATIONS} from './types';
import {fetchAutocompleteResults, fetchLocation} from '../utils/locationSearch';
import {addLocation} from './locations';

function setSearchResults(results) {
  return {
    type: SEARCH_LOCATIONS,
    results
  };
}

export function searchLocations(query) {
  return dispatch => {
    return fetchAutocompleteResults(query).then(results => {
      dispatch(setSearchResults(results.predictions));
    }).catch((error) => {
      dispatch(setSearchResults([]));
    })
  }
}

export function selectLocation(location) {
  return dispatch => {
    return fetchLocation(location.place_id).then(response => {
      var result = response.result;
      return dispatch(addLocation({
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng,
        name: location.terms[0].value,
        state: location.terms[1].value
      }));
    });
  };
}
