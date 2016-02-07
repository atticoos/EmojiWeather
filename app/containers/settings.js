'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Emoji from 'react-native-emoji';
import Colors from '../constants/colors';
import {GlobalStyles} from '../constants/styles';
import Styles from '../constants/styles';

class Settings extends Component {
  render() {
    return (
      <View style={GlobalStyles.container}>
        <Text style={{fontSize: 64}}>Settings</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
  
// });

export default Settings;
