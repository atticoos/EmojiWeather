'use strict';
import {StyleSheet} from 'react-native';
import Colors from './colors';

export const GlobalStyles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: Colors.Blue,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20
  }
});

export default {
  screenPadding: 20
}
