import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 20,
    width: 300,
    height: 90,
    backgroundColor: '#F5F6FA',
    flexDirection: 'column',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    margin: 15,
  },
  text: {
    width: 220,
    fontSize: 18,
    textAlign: 'left',
    color: '#747D8C',
    marginTop: 10,
    marginLeft: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: '#A4B0BE',
    marginLeft: 68,
  },
});

export default styles;
