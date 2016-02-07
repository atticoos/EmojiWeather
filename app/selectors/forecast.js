'use strict';

import moment from 'moment';
import {CURRENT_LOCATION} from '../constants/geo';
import {createSelector} from 'reselect';

const userLocationSelector = state => state.userLocation;
const locationsSelector = state => state.locations;
const selectedLocationSelector = state => state.selectedLocation;
const allWeatherSelector = state => state.weather;

const locationSelector = createSelector(
  userLocationSelector,
  locationsSelector,
  selectedLocationSelector,
  (userLocation, locations, selectedLocationId) => {
    if (selectedLocationId === CURRENT_LOCATION && userLocation) {
      return userLocation;
    }
    return locations[selectedLocationId];
  }
);

const weatherSelector = createSelector(
  selectedLocationSelector,
  allWeatherSelector,
  (locationId, allWeather) => {
    return allWeather[locationId];
  }
);

const relevantWeatherSelector = createSelector(
  weatherSelector,
  (weather) => {
    if (!weather) {
      return null;
    }
    return {
      now: {
        temperature: weather.currently.temperature,
        icon: weather.currently.icon,
        summary: weather.currently.summary,
        high: weather.daily.data[0].temperatureMax,
        low: weather.daily.data[0].temperatureMin,
        date: moment.unix(weather.currently.time)
      },
      upcoming: weather.daily.data.map(report => ({
        high: report.temperatureMax,
        low: report.temperatureMin,
        icon: report.icon,
        summary: report.summary,
        date: moment.unix(report.time)
      })).slice(0, 3)
    };
  }
)

export default createSelector(
  locationSelector,
  relevantWeatherSelector,
  (location, weather) => ({
    location,
    weather
  })
);
