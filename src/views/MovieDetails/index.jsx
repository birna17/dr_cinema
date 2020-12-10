import React from 'react';
import {
 View, TouchableHighlight, Text, Image
} from 'react-native';
import { connect } from 'react-redux';

class MovieDetails extends React.Component {
  hello(){
    this.hello = 'hello';
  }

  render() {
    const { movie } = this.props;
    console.log(movie.omdb);
    return (
      <View>
        <TouchableHighlight>
          <Text>{movie.omdb[0].Runtime}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = (reduxStoreState) => ({
  movie: reduxStoreState.movies,
});

export default connect(mapStateToProps)(MovieDetails);
