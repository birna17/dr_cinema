import React from 'react';
import {
  View, FlatList, Text, Image,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class ComingSoonList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    movies.sort((a, b) => a.year > b.year);
    return (
      <View style={{flex: 1, backgroundColor:'black', paddingTop: 10}}>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                style={styles.image}
                source={{ uri: item.poster }}
              />
              <View style={styles.text}>
                <Text style={{flexWrap: 'wrap'}}> {item.title} </Text>
                <Text> {item.year} </Text>
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}

const mapStateToProps = (reduxStoreState) => ({
  movies: reduxStoreState.comingSoon,
});

export default connect(mapStateToProps)(ComingSoonList);
