import React from 'react';
import {
  View, FlatList, Text, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { setCinema } from '../../actions/cinemaActions';
import styles from './styles';

class cinemaList extends React.Component {
  constructor({ navigation }) {
    super();
    this.navigation = navigation;
  }

  render() {
    const { navigation } = this;
    const { cinemas } = this.props;
    console.log((cinemas));
    cinemas.sort((a, b) => (a.name > b.name));
    return (
      <FlatList
        numColumns={1}
        data={cinemas}
        renderItem={({
          item: {
            name, website, id,
          },
        }) => (
          <TouchableHighlight
            style={styles.container}
            onPress={() => { this.props.setCinema(id); navigation.navigate('CinemaDetails', { navigation }); }}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.website}>{website}</Text>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={(cinema) => cinema.id}
      />
    );
  }
}

const mapStateToProps = (reduxStoreState) => ({
  cinemas: reduxStoreState.cinemas,
});

export default connect(mapStateToProps, { setCinema })(cinemaList);
