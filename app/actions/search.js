'use strict';

import {SEARCH_LOCATIONS} from './types';
import {fetchAutocompleteResults} from '../utils/locationSearch';

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
    }).catch(() => {
      dispatch(setSearchResults([]));
    })
  }
}
