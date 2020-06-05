import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    margin: 20,
    flexDirection: 'row',
  },
  welcomeMessage: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#747D8C'
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 140,
    marginTop: 10
  },
  pathsTitle: {
    color: '#A4B0BE',
    margin: 25,
    fontSize: 20
  },
  pathsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  findMore: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: '#A4B0BE'
  },
  screen: {
    position: 'absolute',
    top: 750,
  },
});

export default styles;