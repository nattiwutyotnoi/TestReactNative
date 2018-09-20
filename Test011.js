/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, Text, View, Button, Alert } from 'react-native';

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.clickMe = this.clickMe.bind(this);
  }

  clickMe = () => {
    this.setState(oldstate => {
      return { active: !oldstate.active }
    })
  }
  clickMeWithArrowFn = () => {
    this.setState(oldstate => {
      return { active: !oldstate.active }
    })
  }

  render() {
    return (
      <View style={{ padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <Button title={this.state.active ? 'Active' : 'InActive'} onPress={this.clickMe} />
        <Button title={this.state.active ? 'Active' : 'InActive'} onPress={this.clickMeWithArrowFn} />

      </View>
    );
  }
}

