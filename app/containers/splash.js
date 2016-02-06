'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} from 'react-native';
import * as Routes from '../constants/routes';
import Colors from '../constants/colors';

class Splash extends Component {
  navigateTo(route) {
    this.props.navigator.push({name: route});
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.navigateTo(Routes.Forecast)}>
          <Text style={styles.text}>Forecast</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.navigateTo(Routes.Locations)}>
          <Text style={styles.text}>Locations</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.navigateTo(Routes.Search)}>
          <Text style={styles.text}>Search</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.navigateTo(Routes.Settings)}>
          <Text style={styles.text}>Settings</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Blue
  },
  text: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Splash;
