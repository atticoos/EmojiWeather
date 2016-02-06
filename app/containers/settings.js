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

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 64}}>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Blue,
    padding: Styles.screenPadding
  }
});

export default Settings;
