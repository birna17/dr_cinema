import React from 'react';
import {
  View, TouchableHighlight, Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList';
import styles from './styles';
import * as Linking from 'expo-linking';

class CinemaDetails extends React.Component {
  constructor({ navigation }) {
    super();
    this.navigation = navigation;
  }

  currentCinema() {
    return this.props.cinemas.filter((cinema) => (cinema.id === this.props.currentCinema))[0];
  }

  render() {
    const currentCinema = this.currentCinema();
    console.log(currentCinema);
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Animatable.Text
            style={styles.header}
            animation="slideInDown"
            iterationCount={1}
          >
            {currentCinema.name}
          </Animatable.Text>
        </View>
        <Text
          style={styles.description}
        >
          {currentCinema.description}
        </Text>
        <Text style={styles.title}>
          {currentCinema.city}
          {'\n'}
          {currentCinema['address\t']}
          {'\n'}
          {currentCinema.phone}
        </Text>
        <TouchableHighlight
          onPress={() => Linking.openURL(`https://${currentCinema.website}`)}
        >
          <Text style={{color: '#89BBFE'}}>{currentCinema.website}</Text>
        </TouchableHighlight>
        <MovieList
          navigation={this.navigation}
        />
      </View>
    );
  }
}

const mapStateToProps = (reduxStoreState) => ({
  cinemas: reduxStoreState.cinemas,
  currentCinema: reduxStoreState.currentCinema,
});

export default connect(mapStateToProps)(CinemaDetails);
