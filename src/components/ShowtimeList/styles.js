import { StyleSheet } from 'react-native';
import { blueSaphire, jordyBlue } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: blueSaphire,
    margin: 25,
    padding: 20,
  },
  name: {
    alignSelf: 'center',
    fontSize: 14,
    color: 'black',
    paddingTop: 10,
  },
  text: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'white',
    paddingBottom: 8,
  },
});
