import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

function BottomTabBar() {
  return <View style={styles.tabBar}></View>;
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    elevation: 9,
    width: width - 40,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
});

export default BottomTabBar;
