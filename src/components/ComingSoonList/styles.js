import { StyleSheet } from 'react-native';
import { jordyBlue } from '../../styles/colors';

export default StyleSheet.create({

  itemContainer: {
    backgroundColor: jordyBlue,
    marginBottom: 35,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: 250,
    width: 175,
  },
  text: {
    flex: 1,
    textAlign: 'left',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
  }
});
