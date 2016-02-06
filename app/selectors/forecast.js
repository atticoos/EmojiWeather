'use strict';

import {createSelector} from 'reselect';

const locationsSelector = state => state.locations;

const locationSelector = createSelector(
  locationsSelector,
  (locations) => locations[0]
);

export default createSelector(
  locationSelector,
  (location) => ({
    location
  })
);
