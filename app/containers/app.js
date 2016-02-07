'use strict';

import React, {Component} from 'react-native';
import {Provider} from 'react-redux/native'
import Navigator from './navigator';
import store from '../store';
import {locateUser} from '../actions/geo';

export default class App extends Component {
  componentDidMount() {
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
