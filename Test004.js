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
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
        <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
        <Text style={style.MyText}>Hello</Text>
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  item: {
    fontSize: 20,
    color: "#FFF000"
  },
  MyText: {
    width: 100,
    height: 100,
    backgroundColor: "#D0D0D0"
  }
})