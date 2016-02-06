'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Emoji from 'react-native-emoji';
import Colors from '../constants/colors';
import Styles from '../constants/styles';

class Forecast extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.location}>Boston, MA</Text>
          <Text style={styles.gear}>Settings</Text>
        </View>
        <View style={styles.weather}>
          <Text style={{fontSize: 64}}><Emoji name='partly_sunny' /></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Blue,
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
  },
  weather: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Forecast;
