'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} from 'react-native';
import * as Routes from '../constants/routes';

class Splash extends Component {
  goToForecast() {
    this.props.navigator.push({name: Routes.Forecast});
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.goToForecast()}>
          <Text style={styles.text}>Splash</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    color: 'red'
  }
});

export default Splash;
