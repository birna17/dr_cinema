import React from 'react';
import {
  View, FlatList, Text, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import * as Linking from 'expo-linking';

class ShowtimeList extends React.Component {
  hello() {
    this.hello = 'hello';
  }

  render() {
    const {movie, cinema} = this.props;
    console.log(movie.item.showtimes);
    const showtimes = movie.item.showtimes.filter((showtime) => (showtime.cinema.id===cinema))[0];
    console.log(showtimes);
    return (
      <View>
        <FlatList
          data={showtimes.schedule}
          renderItem={({item}) => (
            <TouchableHighlight
              style={styles.container}
              onPress={() => Linking.openURL(item.purchase_url)}
              >
              <Text style={styles.text}>
                {item.time}
              </Text>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = (reduxStoreState) => ({
  movie: reduxStoreState.currentMovie,
  cinema: reduxStoreState.currentCinema,
});

export default connect(mapStateToProps)(ShowtimeList);
