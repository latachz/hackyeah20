import React from 'react';
import {View, Image, Text} from 'react-native';
import BottomTabBar from '../../components/BottomTabBar';
const avatar = require('../../../assets/avatar.jpg');

import styles from './index.styles'

import Header from '../../components/Header/index';
import PathsBox from '../../components/PathsBox/index';

function Home() {
  return (
    <View style={styles.container}>
      <Header isMain={true} />

      <Text style={styles.pathsTitle}>Your paths</Text>

      <View style={styles.pathsContainer}>
        <PathsBox subject="Physics" level="5" rank="3" />
        <PathsBox subject="Chemistry" rank="1" />
      </View>

      <Text style={styles.findMore}>Find more</Text>

    </View>
  );
}

export default Home;
