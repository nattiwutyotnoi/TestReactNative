/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Alert,
  TouchableHighlight,
  Image
} from 'react-native';

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  clickMe() {
    Alert.alert("Hello Word!!!");
  }

  longclickMe() {
    Alert.alert("Loing Clike Me!!!");
  }


  render() {
    return (
      <View style={{ padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <TouchableHighlight onPress={this.clickMe} underlayColor="yellow" onLongPress={this.longclickMe}>
          <View>
            <Image resizeMode="center"
              source={require('./img/test001.png')}
              style={{ width: 300, height: 70, margin: 20, }}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
              Button
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

