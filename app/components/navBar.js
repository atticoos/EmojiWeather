'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

class NavBar extends Component {
  getCenterItem() {
    if (this.props.centerItem) {
      return this.props.centerItem;
    } else if (this.props.title) {
      return <Text style={styles.title}>{this.props.title}</Text>
    } else {
      return null;
    }
  }
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.leftContainer}>{this.props.leftItem}</View>
        <View style={styles.centerContainer}>{this.getCenterItem()}</View>
        <View style={styles.rightContainer}>{this.props.rightItem}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
    // paddingVertical: 20
  },
  title: {
    color: '#fff',
    fontSize: 16
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default NavBar;
