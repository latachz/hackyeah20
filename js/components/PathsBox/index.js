import React from 'react';
import {View, Text} from 'react-native';
import * as Progress from 'react-native-progress';


import styles from './index.styles';

function PathsBox({subject, rank, level = '1'}) {
  return (
    <View style={styles.container}>
      <View style={styles.boxHead}>
        <Text style={styles.title}>{subject}</Text>
        <Text style={styles.rank}>Rank #{rank}</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.level}>Level {level}</Text>
      <Progress.Bar
        progress={0.6}
        width={285}
        color="#70A1FF"
        style={{marginLeft: 25, marginTop: 10}}
      />
    </View>
  );
}

export default PathsBox;
