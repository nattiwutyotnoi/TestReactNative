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
  View,
  Image
} from 'react-native';

export default class Test012 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <Image resizeMode='center' style={{ width: undefined, height: 100 }} source={require('./img/test001.png')} />
        <Image resizeMode='stretch' style={{ width: undefined, height: 100 }} source={{ uri: "https://facebook.github.io/react-native/img/favicon.png" }} />
      </View>
    );
  }
} 
