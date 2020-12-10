import { Stylesheet } from 'react-native';
import { darkerBlue, periwinkle, graniteGray } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: periwinkle,
    textAlign: 'center',
    marginTop: 30,
  }
});
