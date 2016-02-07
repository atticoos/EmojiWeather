'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ListView,
  View,
  Text
} from 'react-native';
import renderIf from 'render-if';
import Emoji from 'react-native-emoji';
import Colors from '../constants/colors';
import {GlobalStyles} from '../constants/styles';
import * as Routes from '../constants/routes';
import Styles from '../constants/styles';
import NavBar from '../components/navBar';
import {connect} from 'react-redux/native';
import {selectLocation} from '../actions/locations';
import {getWeather} from '../actions/weather';
import selector from '../selectors/locations';

class Locations extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.locations)
    };
  }
  componentWillReceiveProps(nextProps) {
    this.state.dataSource = this.state.dataSource.cloneWithRows(nextProps.locations);
  }
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
  selectLocation(location) {
    this.props.dispatch(selectLocation(location.id));
    this.props.dispatch(getWeather(location.id));
    this.props.navigator.pop();
  }
  renderRow(location) {
    return (
      <TouchableHighlight
        onPress={() => this.selectLocation(location)}>
        <View style={styles.row}>
        <View style={styles.left}>
          {renderIf(location.userLocation)(
            <Text style={styles.currentLocationIcon}>
              <Emoji name={'round_pushpin'} />
            </Text>
          )}
          <Text style={styles.state}>{location.name}</Text>
        </View>

        <Text style={styles.temp}>75°</Text>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={GlobalStyles.container}>
        <NavBar
          leftItem={this.getLeftNavItem()}
          rightItem={this.getRightNavItem()}
          title='Locations' />
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(data) => this.renderRow(data)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    color: '#fff',
    fontSize: 28
  },
  add: {
    color: '#fff',
    fontSize: 32
  },
  list: {
    flex: 1,
    marginHorizontal: -20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'blue',
    marginBottom: 2
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  currentLocationIcon: {
    fontSize: 36
  },
  state: {
    fontSize: 32,
    color: '#fff'
  },
  temp: {
    color: '#fff',
    fontSize: 32
  }
});

export default connect(selector)(Locations);
