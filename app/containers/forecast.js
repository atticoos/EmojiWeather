'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import {connect} from 'react-redux/native';
import {getWeather} from '../actions/weather';
import selector from '../selectors/forecast';
import Emoji from 'react-native-emoji';
import Colors from '../constants/colors';
import * as Routes from '../constants/routes';
import Styles from '../constants/styles';
import NavBar from '../components/navBar';

class Forecast extends Component {
  componentDidMount() {
    this.props.dispatch(getWeather());
  }
  getLeftNavItem() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigator.push({name: Routes.Locations})}>
        <Text style={styles.location}>{this.props.location.name}</Text>
      </TouchableOpacity>
    );
  }
  getRightNavItem() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigator.push({name: Routes.Settings})}>
        <Text style={styles.gear}>S</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar
          leftItem={this.getLeftNavItem()}
          rightItem={this.getRightNavItem()} />
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
    padding: Styles.screenPadding
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

export default connect(selector)(Forecast);
