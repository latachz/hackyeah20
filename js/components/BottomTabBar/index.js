import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('screen');

function BottomTabBar({navigation}) {
  return (
    <View style={styles.tabBar}>
      <Icon.Button
        name="home"
        size={30}
        color="#900"
        style={styles.icon}
        onPress={() => navigation.navigate('Subject')}
      />
      <Icon name="rocket" size={30} color="#900" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    left: 20,
    right: 20,
    bottom: 20,
    elevation: 9,
    width: width - 40,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  icon: {
    margin: 10,
  },
});

export default BottomTabBar;
