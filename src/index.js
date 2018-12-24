import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

const regular = '#F5FCFF';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: regular,
  },
});

export default class App extends Component {
  state = {};

  render() {
    return <View style={styles.container} />;
  }
}
