'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Emoji from 'react-native-emoji';

class DayForecast extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.day}>{this.props.day.format('ddd').toUpperCase()}</Text>
        <Text style={styles.icon}><Emoji name={this.props.icon} /></Text>
        <Text style={styles.temp}>{Math.round(this.props.temperature)}°</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  day: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '800',
    backgroundColor: 'transparent'
  },
  icon: {
    fontSize: 48,
    marginTop: -5,
    backgroundColor: 'transparent'
  },
  temp: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    marginTop: -10,
    backgroundColor: 'transparent'
  }
});

export default DayForecast;
