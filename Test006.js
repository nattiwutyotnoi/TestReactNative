/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class Component1 extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={{ width: 50, backgroundColor: 'red' }} />
        <View style={{ width: 50, backgroundColor: 'green' }} />
        <View style={{ width: 50, backgroundColor: 'blue' }} />
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
    justifyContent: 'space-evenly'
  }
})