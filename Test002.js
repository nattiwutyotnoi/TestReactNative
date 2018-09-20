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
      <View style={{
        flex: 1, flexDirection: 'column',
        backgroundColor: '#0000FF',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <Test002 id="Hello Word!!" interval={100} />
      </View>
    )
  }
}

class Test002 extends Component {
  constructor(props) {
    super(props)
    this.state = { inVisible: true };

    setInterval(() => {
      this.setState(oldState => {
        return { inVisible: !oldState.inVisible }
      })
    }, this.props.interval)
  }
  render() {
    let display = this.state.inVisible ? this.props.id : '';
    return (
      <Text style={{
        textAlign: 'center', color: '#FFFFFF'
      }}>
        {display}
      </ Text>
    )
  }
}