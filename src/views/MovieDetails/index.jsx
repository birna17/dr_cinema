import React from 'react';
import {
 View, TouchableHighlight, Text, Image
} from 'react-native';
import { connect } from 'react-redux';
import ShowtimeList from '../../components/ShowtimeList';

class MovieDetails extends React.Component {
  hello(){
    this.hello = 'hello';
  }

  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <View>
        <TouchableHighlight>
          <Text>{movie.item.title}</Text>
        </TouchableHighlight>
        <ShowtimeList />
      </View>
    );
  }
}

const mapStateToProps = (reduxStoreState) => ({
  movie: reduxStoreState.currentMovie,
});

export default connect(mapStateToProps)(MovieDetails);
