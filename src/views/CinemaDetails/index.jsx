import React from 'react';
import {
 View, TouchableHighlight, Text, Image
} from 'react-native';
import { connect } from 'react-redux';

class CinemaDetails extends React.Component {
  render () {
    console.log(this.props.setCinema);
    return (
      <TouchableHighlight onPress={() => console.log()}>
        <Text>hello</Text>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = (reduxStoreState) => ({
  cinemas: reduxStoreState.cinemas,
  setCinema: reduxStoreState.setCinema,
});

export default connect(mapStateToProps)(CinemaDetails);
