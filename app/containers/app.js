'use strict';

import React, {Component} from 'react-native';
import {Provider} from 'react-redux/native'
import Navigator from './navigator';
import store from '../store';
import {locateUser} from '../actions/geo';
import {getWeather} from '../actions/weather';
import {guid} from '../utils/utils';
import {
  addLocation,
  selectLocation
} from '../actions/locations';

var demoId = guid();
store.dispatch(addLocation({
  id: demoId,
  latitude: 42.3601,
  longitude: -71.0589,
  name: 'Boston',
  state: 'MA'
}));
store.dispatch(selectLocation(demoId));
store.dispatch(getWeather(demoId));

export default class App extends Component {
  componentDidMount() {
    // demo location
    store.dispatch(locateUser());
  }
  render() {
    return (
      <Provider store={store}>
      {() => (
        <Navigator />
      )}
      </Provider>
    );
  }
}
