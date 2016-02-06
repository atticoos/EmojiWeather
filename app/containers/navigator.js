'use strict';

import React, {
  Component,
  Navigator
} from 'react-native';
import * as Routes from '../constants/routes';

import Splash from './splash';
import Forecast from './forecast';

class App extends Component {
  renderScene(route, navigator){
    switch(route.name) {
      case Routes.Splash:
        return <Splash navigator={navigator} />;
      case Routes.Forecast:
        return <Forecast navigator={navigator} />;
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
