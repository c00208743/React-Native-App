import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class header extends Component {
  render() {
    return (
      <View style={styles.container}>
          
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:10,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'skyblue',
        height: 64,

    }
});
