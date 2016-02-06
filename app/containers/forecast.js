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
        <Text>Forecast</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Forecast;
