import React from 'react';
import {
  View, FlatList, Text, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';

class ShowtimeList extends React.Component {
  render () {
    const {movie} = this.props;
    console.log(movie);
    const showtimes = movie.showtimes;
    return (
      <View>
        <FlatList
          data={showtimes}
          renderItem={({item}) => (
            <View>
              <Text>
                {item.time}
              </Text>
              <Text>
                {item.purchase_url}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = (reduxStoreState) => ({
  movie: reduxStoreState.currentMovie,
});

export default connect(mapStateToProps)(ShowtimeList);
