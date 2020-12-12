import { StyleSheet } from 'react-native';
import { periwinkle, jordyBlue } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  name: {
    alignSelf: 'center',
    fontSize: 14,
    color: 'black',
    paddingTop: 10,
  },
  itemContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: jordyBlue,
  },
  text: {
    flex: 1,
    fontSize: 15,
    color: 'white',
    paddingBottom: 8,
    flexWrap: 'wrap',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: periwinkle,
    textAlign: 'center',
    marginTop: 30,
  },
  image: {
    height: 250,
    width: 175,
    alignSelf: 'center',
    margin: 5,
  },
});
