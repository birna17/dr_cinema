import React from 'react';
import {
  View, FlatList, Text, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/movieActions';

class MovieList extends React.Component {
  componentDidMount() {
    this.props.getMovies(this.props.currentCinema);
  }

  render() {
    const { movies } = this.props;
    console.log(movies)
    return (
      <FlatList
        numColumns={1}
        data={movies}
        renderItem={({
          item: {
            title,
            showtimes,
          },
        }) => (
          <View>
            <TouchableHighlight>
              <Text>{title}</Text>
            </TouchableHighlight>
          </View>

        )}
      />
    );
  }
}

const mapStateToProps = (reduxStoreState) => ({
  movies: reduxStoreState.movies,
  currentCinema: reduxStoreState.currentCinema,
});

export default connect(mapStateToProps, { getMovies })(MovieList);
