import React from 'react';
import {
  View, FlatList, Text, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';

class GenreList extends React.Component {
  hello() {
    this.hello = 'hello';
  }

  render() {
    const { movie } = this.props;
    console.log(movie.item.genres);
    return(
      <View style={{flex:1}}>
        <FlatList
          contentContainerStyle={{flexDirection:'row', flexWrap: 'wrap'}}
          data={movie.item.genres}
          renderItem={({ item }) => (
            <View>
            <Text style={{color:'white', fontStyle: 'italic'}}>
              {item.Name}{'   '}
            </Text>
          </View>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = reduxStoreState => ({
  movie: reduxStoreState.currentMovie,
});

export default connect(mapStateToProps)(GenreList);
