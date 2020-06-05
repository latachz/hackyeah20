import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 20,
    flexDirection: 'row',
  },
  welcomeMessageMain: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#747D8C',
  },
  welcomeMessage: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#747D8C',
    margin: 15,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 15,
    right: 15,
  },
});

export default styles;
