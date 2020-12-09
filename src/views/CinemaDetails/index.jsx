import React from 'react';
import {
 View, TouchableHighlight, Text, Image
} from 'react-native';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList';

class CinemaDetails extends React.Component {
  currentCinema() {
    return this.props.cinemas.filter((cinema) => (cinema.id === this.props.currentCinema))[0];
  }

  render() {
    const currentCinema = this.currentCinema();
    console.log(currentCinema.name);
    return (
      <View>
        <TouchableHighlight>
          <Text>{currentCinema.name}</Text>
        </TouchableHighlight>
        <MovieList />
      </View>
    );
  }
}

const mapStateToProps = (reduxStoreState) => ({
  cinemas: reduxStoreState.cinemas,
  currentCinema: reduxStoreState.currentCinema,
});

export default connect(mapStateToProps)(CinemaDetails);
