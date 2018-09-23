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
  Text,
  FlatList
} from 'react-native';

export default class Test012 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <FlatList style={{ matginTop: 50 }} data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
    );
  }
} 
