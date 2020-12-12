import { StyleSheet } from 'react-native';
import {
  graniteGray, freshAir, jordyBlue
} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 10,
    backgroundColor: jordyBlue,
    flexDirection: 'column',
    alignContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  logo: {
    marginTop: 50,
    width: 200,
    height: 45,
    alignItems: 'center',
  },
});
