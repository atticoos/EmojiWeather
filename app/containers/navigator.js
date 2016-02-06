'use strict';

import React, {
  Component,
  Navigator
} from 'react-native';
import * as Routes from '../constants/routes';

import Splash from './splash';
import Forecast from './forecast';
import Locations from './locations';
import Search from './search';
import Settings from './settings';

class App extends Component {
  renderScene(route, navigator){
    switch(route.name) {
      case Routes.Splash:
        return <Splash navigator={navigator} />;
      case Routes.Forecast:
        return <Forecast navigator={navigator} />;
      case Routes.Locations:
        return <Locations navigator={navigator} />;
      case Routes.Search:
        return <Search navigator={navigator} />;
      case Routes.Settings:
        return <Settings navigator={navigator} />;
      default:
        return <Splash navigator={navigator} />;
    }
  }
  render() {
    return (
      <Navigator
        ref={(navigator) => this.navigator = navigator}
        initialRoute={{name: Routes.Splash}}
        renderScene={this.renderScene} />
    );
  }
}

export default App;
