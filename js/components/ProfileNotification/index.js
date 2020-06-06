
import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';

const avatar = require('../../../assets/avatar.jpg');
import styles from './index.styles';

function Subject({name = 'Joe Doe', subject = 'Biology'}) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.text}>
          You won challenge with <Text style={styles.boldText}>{name}</Text> at{' '}
          <Text style={styles.boldText}>{subject}.</Text>
        </Text>
      </View>
      <Text style={styles.time}>20 mintues ago</Text>
    </View>
  );
}

export default Subject;
