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
import {getEmojiByForecastIcon} from '../utils/emojis';
import {GlobalStyles} from '../constants/styles';
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
        <Text style={styles.currentLocation}>{this.props.location.name}, {this.props.location.state}</Text>
      </TouchableOpacity>
    );
  }
  getRightNavItem() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigator.push({name: Routes.Settings})}>
        <Text style={styles.gear}>⚙</Text>
      </TouchableOpacity>
    )
  }
  renderWeather() {
    var weather = this.props.weather.now;
    return (
      <View style={styles.todayWeather}>
        <Text style={styles.largeIcon}><Emoji name={getEmojiByForecastIcon(weather.icon)} /></Text>
        <Text style={styles.largeText}>{toFahrenheit(weather.temperature)}°</Text>
      </View>
    );
  }
  renderLoading() {
    return  (
      <View style={styles.loadingContainer}>
        <Text style={styles.largeIcon}><Emoji name='grimacing' /></Text>
        <Text style={styles.largeText}>Loading</Text>
      </View>
    )
  }
  renderForecast() {
    return this.props.weather.upcoming.map((forecast, index) => {
      return <DayForecast
        key={index}
        day={forecast.date}
        temperature={forecast.high}
        icon={getEmojiByForecastIcon(forecast.icon)} />
    });
  }
  render() {
    return (
      <View style={GlobalStyles.container}>
        <NavBar
          leftItem={this.getLeftNavItem()}
          rightItem={this.getRightNavItem()} />
        <View style={styles.content}>
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
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  currentLocation: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600'
  },
  gear: {
    color: '#fff',
    fontSize: 22
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  todayWeather: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  largeIcon: {
    fontSize: 140,
    backgroundColor: 'transparent'
  },
  largeText: {
    fontSize: 84,
    fontWeight: '700',
    color: '#fff',
    lineHeight: 84,
    marginTop: -20,
    backgroundColor: 'transparent'
  },
  forecast: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default connect(selector)(Forecast);
