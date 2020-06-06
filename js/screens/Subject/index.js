import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import BottomTabBar from '../../components/BottomTabBar';
const avatar = require('../../../assets/avatar.jpg');

import Header from '../../components/Header/index';
import LessonBox from '../../components/LessonBox/index';

import styles from './index.styles';

function Subject() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.lessonsHead}>
        <Text style={styles.lessonsHeadText}>Lessons</Text>
        <Text style={styles.lessonsHeadTextRight}>2/3</Text>
      </View>

      <ScrollView
        style={styles.lessonsContainer}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LessonBox />
        <LessonBox />
        <LessonBox />
      </ScrollView>

      <View style={styles.screen}>
        <BottomTabBar />
      </View>
    </View>
  );
}

export default Subject;
