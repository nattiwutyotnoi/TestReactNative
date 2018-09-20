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
    this.state = {text: ''};
  }

  clickMe(){
    Alert.alert("Hello Word!!!");
  }

  render() {
    return (
      <View style={{padding: 10, flex: 1 , flexDirection: 'column', justifyContent: 'center'}}>
       <Button title="Button" onPress={this.clickMe}/>
      </View>
    );
  }
}

