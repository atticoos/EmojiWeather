'use strict';

import {SEARCH_LOCATIONS} from '../actions/types';

const initialState = {
  results: []
};

export default function searchReducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH_LOCATIONS:
      return {
        ...state,
        results: action.results
      };
    default:
      return state;
  }
}
