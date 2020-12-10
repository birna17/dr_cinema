import { StyleSheet } from 'react-native';
import { freshAir } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 25,
    backgroundColor: freshAir,
    marginTop: 50,
  },
  name: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
    paddingTop: 15,
  },
  website: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#ffffff',
    paddingTop: 10,
  }
});
