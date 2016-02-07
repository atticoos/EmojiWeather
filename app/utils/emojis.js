'use strict';

const EmojiMap = {
  'clear-day': 'sunny',
  'clear-night': 'full_moon_with_face',
  'rain': 'rain_cloud',
  'snow': 'snowflake',
  'sleet': 'snow_cloud',
  'wind': 'wind_blowing_face',
  'fog': 'fog',
  'cloudy': 'cloud',
  'partly-cloudy-day': 'barely_sunny',
  'partly-cloudy-night': 'cloud',
  'hail': 'snow_cloud',
  'thunderstorm': 'thunder_cloud_and_rain',
  'tornado': 'tornado'
}

export function getEmojiByForecastIcon (forecastIcon) {
  if (forecastIcon in EmojiMap) {
    return EmojiMap[forecastIcon];
  }
}
