import { StyleSheet } from 'react-native';
import { freshAir, jordyBlue } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: jordyBlue,
    marginTop: 50,
  },
  name: {
    alignSelf: 'center',
    fontSize: 14,
    color: 'black',
    paddingTop: 10,
  },
  website: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#ffffff',
    paddingBottom: 8,
  }
});
