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
    FlatList,
    Image,
    ImageBackground
} from 'react-native';


export class Test014 extends Component {
    renderLIstHeader() {
        return (
            <View>
                <Image style={{ width: '100%', height: 90, resizeMode: 'contain', marginTop: 20, marginBottom: 40 }} source={require('./img/anonymous_logo_by_v_a_p_o_r-d4nqyce.png')} />
            </View>
        )
    }

    renderItem(item) {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#00ff00', marginBottom: 20, borderRadius: 7 }}>
                <View style={{ flexDirection: 'row', margin: 16 }}>
                    <Image style={{ width: 45, height: 45 }} source={require('./img/550f7e584c470.png')} />
                    <View style={{ flexDirection: 'column', margin: 16 }}>
                        <Text>Title</Text>
                        <Text>SubTitle</Text>
                    </View>
                </View>
                <Image style={{ width: '100%', height: 200 }} source={require('./img/Test2.png')} />
            </View>
        );
    }

    render() {
        return (
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./img/bg.gif')}>
                <View>
                    <FlatList
                        style={{ padding: 20, paddingLeft: 32 }}
                        data={[1, 2, 3, 4]}
                        ListHeaderComponent={this.renderLIstHeader}
                        renderItem={({ item }) => this.renderItem(item)} />
                </View>
            </ImageBackground>
        )
    }
}

export default Test014

// export default class Test012 extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <View style={{ padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
//         <FlatList style={{ matginTop: 50 }} data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
//           renderItem={({ item }) => <Text>{item}</Text>} />
//       </View>
//     );
//   }
// } 
