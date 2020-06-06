import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 40,
  },
  headName: {
    fontSize: 24,
    color: '#747D8C',
    marginTop: 10
  }

});

export default styles;
