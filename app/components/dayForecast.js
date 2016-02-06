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
        <Text style={styles.day}>{this.props.day.format('ddd')}</Text>
        <Text style={styles.icon}><Emoji name={'partly_sunny'} /></Text>
        <View style={styles.tempRow}>
          <Text style={styles.icon}>{this.props.temperature}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default DayForecast;
