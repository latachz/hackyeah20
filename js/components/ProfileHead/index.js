
import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';

const avatar = require('../../../assets/avatar.jpg');

import Header from '../../components/Header/index';
import LessonBox from '../../components/LessonBox/index';

import styles from './index.styles';

function Subject({name}) {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.headName}>{name}</Text>
    </View>
  );
}

export default Subject;
