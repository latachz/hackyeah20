import React from 'react';
import {View, Image, Text} from 'react-native';
const avatar = require('../../../assets/avatar.jpg');

import styles from './index.styles';

function Header({name = 'Kacper', isMain = false, subject = 'Physics'}) {
  if (isMain) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeMessageMain}>
          Welcome back, {'\n'}
          {name}!
        </Text>
        <Image style={styles.avatar} source={avatar} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>{subject}</Text>
      <Image style={styles.avatar} source={avatar} />
    </View>
  );
}

export default Header;
