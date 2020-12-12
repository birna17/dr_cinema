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
    fontSize: 12,
    padding: 5,
},
header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: periwinkle,
    textAlign: 'center',
    marginTop: 30,
},
});
