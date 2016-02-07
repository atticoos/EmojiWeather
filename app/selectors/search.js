'use strict';

import {createSelector} from 'reselect';

const searchResultsSelector = state => state.search.results;

const formattedSearchResultsSelector = createSelector(
  searchResultsSelector,
  (searchResults) => {
    return searchResults.map(searchResult => {
      return {
        ...searchResult,
        label: searchResult.terms.slice(0, 2).map(term => {
          return term.value
        }).join(', ')
      };
    });
  }
)

export default createSelector(
  formattedSearchResultsSelector,
  (searchResults) => ({
    searchResults
  })
);
