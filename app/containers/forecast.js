'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

class Forecast extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.location}>Boston, MA</Text>
          <Text style={styles.gear}>Settings</Text>
        </View>
        <View style={styles.weather}>
          <Text>Weather today</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 20
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  location: {
    color: '#fff',
    fontSize: 26
  },
  gear: {
    color: '#fff',
    fontSize: 22
  }
});

export default Forecast;
