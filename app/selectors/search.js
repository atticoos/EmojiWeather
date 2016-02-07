'use strict';

import {createSelector} from 'reselect';

const searchResultsSelector = state => state.search.results;

export default createSelector(
  searchResultsSelector,
  (searchResults) => ({
    searchResults
  })
);
