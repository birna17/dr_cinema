import { StyleSheet } from 'react-native';
import { blueSaphire, jordyBlue } from '../../styles/colors';

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
  text: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'white',
    paddingBottom: 8,
  },
  showingMovies: {
      color: blueSaphire,
      marginTop: 20,
      alignSelf: 'center',
      fontSize: 20,
      textDecorationLine: 'underline',
  },
});
