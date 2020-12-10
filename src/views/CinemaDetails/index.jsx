import React from 'react';
import {
  View, TouchableHighlight, Text,
} from 'react-native';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList';
import styles from './styles';

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
    console.log(currentCinema.id);
    return (
      <View>
        <TouchableHighlight style={styles.container}>
          <Text>{currentCinema.name}</Text>
        </TouchableHighlight>
        <MovieList navigation={this.navigation} />
      </View>
    );
  }
}

const mapStateToProps = (reduxStoreState) => ({
  cinemas: reduxStoreState.cinemas,
  currentCinema: reduxStoreState.currentCinema,
});

export default connect(mapStateToProps)(CinemaDetails);
