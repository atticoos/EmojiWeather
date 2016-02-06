'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Splash</Text>
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
