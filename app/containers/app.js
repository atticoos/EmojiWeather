'use strict';

import React, {Component} from 'react-native';
import {Provider} from 'react-redux/native'
import Navigator from './navigator';
import store from '../store';

export default class App extends Component {
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
