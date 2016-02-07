'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ListView,
  View,
  Text
} from 'react-native';
import Emoji from 'react-native-emoji';
import Colors from '../constants/colors';
import {GlobalStyles} from '../constants/styles';
import Styles from '../constants/styles';
import NavBar from '../components/navBar';
import {connect} from 'react-redux/native';
import {searchLocations} from '../actions/search';
import selector from '../selectors/search';

class Search extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: dataSource.cloneWithRows([]),
      query: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.searchResults !== nextProps.searchResults) {
      this.state.dataSource = this.state.dataSource.cloneWithRows(nextProps.searchResults);
      this.setState(this.state);
    }
  }
  onTextChange(value) {
    clearTimeout(this.autocompleteTimeout);
    this.autocompleteTimeout = setTimeout(() => this.props.dispatch(searchLocations(this.state.query)), 250);
    this.state.query = value;
    this.setState(this.state);
  }
  renderRow(item) {
    return (
      <View style={styles.row}>
        <Text style={styles.locationName}>{item.label}</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={GlobalStyles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigator.pop()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchBar}
              value={this.state.query}
              onChangeText={(value) => this.onTextChange(value)} />
          </View>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => this.renderRow(data)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  done: {
    color: '#fff',
    fontSize: 18
  },
  searchWrapper: {
    flex: 1,
    height: 30
  },
  searchBar: {
    flex: 1,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },
  row: {

  },
  locationName: {
    color: '#fff',
    fontSize: 32
  }
});

export default connect(selector)(Search);
