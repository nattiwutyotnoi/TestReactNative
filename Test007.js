/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, Text, View } from 'react-native';

export default class Component1 extends Component {
  constructor(props) {
    super(props)
    this.state = { text='' };
  }
  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ hieight: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setSate({ text })}
        />
        <Text style={{ padding: 10, fonSize: 42 }}>
          {this.state.text.split('').map((word) => word && '').join('')}
        </Text>
      </View>
    )
  }
}