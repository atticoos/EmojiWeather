'use strict';

import moment from 'moment';
import {createSelector} from 'reselect';

const userLocationSelector = state => state.userLocation;
const locationsSelector = state => state.locations;
const allWeatherSelector = state => state.weather;

const locationSelector = createSelector(
  userLocationSelector,
  locationsSelector,
  (userLocation, locations) => {
    if (userLocation) {
      return userLocation;
    }
    return locations[0];
  }
);

const weatherSelector = createSelector(
  locationSelector,
  allWeatherSelector,
  (location, allWeather) => {
    return allWeather[`${location.latitude}${location.longitude}`];
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
