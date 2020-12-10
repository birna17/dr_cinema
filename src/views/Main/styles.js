import { StyleSheet } from 'react-native';
import {
  graniteGray, freshAir, jordyBlue
} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 10,
    backgroundColor: jordyBlue,

  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  logo: {
    width: 350,
    height: 300,
    alignItems: 'center',
  },
  slogan: {
    width: 120,
    height: 30,
    alignItems: 'center',
  },
});
