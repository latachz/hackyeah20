import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';

const avatar = require('../../../assets/avatar.jpg');

import Head from '../../components/ProfileHead/index';
import ProfileNotification from '../../components/ProfileNotification/index'

import styles from './index.styles';

function Subject() {
  return (
    <View style={styles.container}>
      <Head name='Kacper Latuszewski' />

      <ProfileNotification name="Joe Doe" subject="Biology" />
      <ProfileNotification name="Joe Doe" subject="Biology" />
      <ProfileNotification name="Joe Doe" subject="Biology" />
    </View>
  );
}

export default Subject;
