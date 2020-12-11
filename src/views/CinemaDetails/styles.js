import { StyleSheet } from 'react-native';
import { periwinkle, jordyBlue, graniteGray, blueSaphire } from '../../styles/colors';

export default StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'black',
},
itemContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: jordyBlue,
},
description: {
    color: graniteGray,
    fontSize: 10,
    fontStyle: 'italic',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
},
title: {
    color: periwinkle,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
},
textWrap: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'flex-start',
},
showingMovies: {
    color: blueSaphire,
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
},
justifyText: {
    color: jordyBlue,
    paddingTop: 7,
    paddingLeft: 5,
},
header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: periwinkle,
    textAlign: 'center',
    marginTop: 30,
}
});
