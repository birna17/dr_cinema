import React from 'react';
import {
  View, FlatList, Text, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { getMovies, setMovie } from '../../actions/movieActions';

class MovieList extends React.Component {
  constructor({ navigation }) {
    super();
    this.navigation = navigation;
  }

  componentDidMount() {
    this.props.getMovies(this.props.currentCinema);
  }

  render() {
    const { movies } = this.props;
    return (
      <FlatList
        numColumns={1}
        data={movies}
        renderItem={({
          item: {
            title,
            omdb,
          },
        }) => (
          <View>
            <TouchableHighlight onPress={() => {
              console.log(omdb)
              this.props.setMovie({ omdb });
              this.navigation.navigate('MovieDetails');
            }}
            >
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

export default connect(mapStateToProps, { getMovies, setMovie })(MovieList);
