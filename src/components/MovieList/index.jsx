import React from 'react';
import {
  View, FlatList, Text, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { getMovies, setMovie } from '../../actions/movieActions';
import styles from './styles';

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
          item
        }) => (
          <View>
            <TouchableHighlight onPress={() => {
              console.log(this.navigation);
              this.props.setMovie({ item });
              this.navigation.navigate('MovieDetails');
            }}
            >
              <Text style={styles.text}>{item.title}</Text>
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
