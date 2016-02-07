'use strict';

import {createSelector} from 'reselect';

const userLocationSelector = state => state.userLocation;
const locationsSelector = state => state.locations;

const aggregatedLocationsSelector = createSelector(
  locationsSelector,
  userLocationSelector,
  (locations, userLocation) => {
    var combinedLocations = [];
    if (userLocation) {
      combinedLocations.push({
        ...userLocation,
        userLocation: true
      });
    }

    return combinedLocations.concat(
      Object.keys(locations)
        .map(locationId => locations[locationId])
        .map(location => ({
          ...location,
          userLocation: false
        }))
    );
  }
);

export default createSelector(
  aggregatedLocationsSelector,
  (locations) => ({
    locations
  })
);
