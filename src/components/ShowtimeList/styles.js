import { StyleSheet } from 'react-native';
import { blueSaphire, jordyBlue } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: jordyBlue,
    margin: 25,
    padding: 15,
    flex: 1,
    marginTop: 0,
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
