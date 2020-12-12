import React from 'react';
import {
 View, TouchableHighlight, Text, Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import ShowtimeList from '../../components/ShowtimeList';
import styles from './styles';
import GenreList from '../../components/GenreList';


class MovieDetails extends React.Component {
  hello() {
    this.hello = 'hello';
  }

  render() {
    const { movie } = this.props;
    console.log(movie.item.omdb[0].Poster);
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
        <Animatable.Text
          style={styles.header}
          animation="slideInDown"
          iterationCount={1}>
            {movie.item.title}
        </Animatable.Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.image}
            source={{ uri: movie.item.omdb[0].Poster }}
          />
          <Text style={styles.text}>
            {movie.item.plot}
            {'\n'}
            Duration: {movie.item.durationMinutes} min
            {'\n'}
            Year released: {movie.item.year}
          </Text>
        </View>
        <GenreList />

        <ShowtimeList />
      </View>
    );
  }
}

const mapStateToProps = (reduxStoreState) => ({
  movie: reduxStoreState.currentMovie,
});

export default connect(mapStateToProps)(MovieDetails);
