import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './index.styles';

function LessonBox() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox
        style={{marginTop: 15, marginLeft: 10}}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={() =>
          toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)
        }
        onCheckColor={'#70A1FF'}
      />
      <Text style={styles.text}>Gravity p1</Text>
    </View>
  );
}

export default LessonBox;
