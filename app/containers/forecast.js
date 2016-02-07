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
import {selectDefaultLocation} from '../actions/locations';
import {toFahrenheit} from '../utils/converters';
import selector from '../selectors/forecast';
import Emoji from 'react-native-emoji';
import Colors from '../constants/colors';
import * as Routes from '../constants/routes';
import Styles from '../constants/styles';
import NavBar from '../components/navBar';
import DayForecast from '../components/dayForecast';
import moment from 'moment';

class Forecast extends Component {
  componentDidMount() {
    this.props.dispatch(selectDefaultLocation());
    this.props.dispatch(getWeather());
  }
  componentWillReceiveProps(nextProps) {
    console.log('das weather', nextProps.weather);
  }
  getLeftNavItem() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigator.push({name: Routes.Locations})}>
        <Text style={styles.location}>{this.props.location.name}, {this.props.location.state}</Text>
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
  renderWeather() {
    return (
      <View>
        <Text style={{fontSize: 64}}><Emoji name='partly_sunny' /></Text>
        <Text style={{fontSize: 32}}>{toFahrenheit(this.props.weather.now.temperature)}</Text>
      </View>
    );
  }
  renderLoading() {
    return <Text style={{fontSize: 64}}>Loading</Text>
  }
  renderForecast() {
    return this.props.weather.upcoming.map((forecast, index) => {
      return <DayForecast
        key={index}
        day={forecast.date}
        temperature={forecast.high} />
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar
          leftItem={this.getLeftNavItem()}
          rightItem={this.getRightNavItem()} />
        <View style={styles.weather}>
          {
            this.props.weather ?
              this.renderWeather() :
              this.renderLoading()
          }
        </View>
        <View style={styles.forecast}>
          {this.props.weather ? this.renderForecast() : null}
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
  },
  forecast: {
    flexDirection: 'row'
  }
});

export default connect(selector)(Forecast);
