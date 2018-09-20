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

        <Text style={style.item}>Codeing</Text>
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
    flex : 1,flexDirection: 'column',
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item:{
    fontSize: 20,
    color: "#FFF000"
  }
})