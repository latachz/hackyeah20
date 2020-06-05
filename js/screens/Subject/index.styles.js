import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  lessonsHead: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  lessonsHeadText: {
    color: '#A4B0BE',
    fontSize: 18,
    marginLeft: 35,
  },
  lessonsHeadTextRight: {
    color: '#A4B0BE',
    fontSize: 18,
    right: -230,
  },
  lessonsContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  screen: {
    position: 'absolute',
    top: 750,
  },
});

export default styles;
