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
import {GlobalStyles} from '../constants/styles';
import Styles from '../constants/styles';
import NavBar from '../components/navBar';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
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
              onChangeText={(value) => console.log(value)} />
          </View>
        </View>
        <Text style={{fontSize: 64}}>Search</Text>
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
  }
});

export default Search;
