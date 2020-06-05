import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 130,
    backgroundColor: '#F5F6FA',
    borderRadius: 25,
    margin: 10,
  },
  boxHead: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#747D8C',
    margin: 25,
  },
  rank: {
    position: 'absolute',
    right: 20,
    top: 32,
    color: '#A4B0BE',
  },
  line: {
    width: 100,
    height: 2,
    backgroundColor: '#D2DAE2',
    marginTop: -20,
    marginLeft: 25,
  },
  level: {
    marginLeft: 25,
    marginTop: 5,
    fontSize: 12,
    color: '#A4B0BE',
  },
});

export default styles;
