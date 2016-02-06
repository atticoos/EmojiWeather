'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text
} from 'react-native';
import Emoji from 'react-native-emoji';
import Colors from '../constants/colors';
import Styles from '../constants/styles';
import NavBar from '../components/navBar';

class Search extends Component {
  getLeftNavItem() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigator.pop()}>
        <Text style={styles.done}>Done</Text>
      </TouchableOpacity>
    );
  }
  getSearchBar() {
    return (
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchBar}></TextInput>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar
          leftItem={this.getLeftNavItem()}
          centerItem={this.getSearchBar()} />
        <Text style={{fontSize: 64}}>Search</Text>
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
  done: {
    color: '#fff',
    fontSize: 18
  },
  searchWrapper: {
    flex: 1,
    height: 30,
    backgroundColor: 'blue'
  },
  searchBar: {
    flex: 1,
    height: 30,
    backgroundColor: 'blue'
  }
});

export default Search;
