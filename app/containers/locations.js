'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Emoji from 'react-native-emoji';
import Colors from '../constants/colors';
import * as Routes from '../constants/routes';
import Styles from '../constants/styles';
import NavBar from '../components/navBar';

class Locations extends Component {
  getLeftNavItem() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigator.pop()}>
        <Text style={styles.back}>&lt;</Text>
      </TouchableOpacity>
    );
  }
  getRightNavItem() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigator.push({name: Routes.Search})}>
        <Text style={styles.add}>+</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar
          leftItem={this.getLeftNavItem()}
          rightItem={this.getRightNavItem()}
          title='Locations' />
        <Text style={{fontSize: 64}}>Locations</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Blue,
    padding: Styles.screenPadding
  },
  back: {
    color: '#fff',
    fontSize: 28
  },
  add: {
    color: '#fff',
    fontSize: 32
  }
});

export default Locations;
