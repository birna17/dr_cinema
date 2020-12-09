import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getCinemas } from '../../actions/cinemaActions';
import CinemaList from '../../components/CinemaList';

class Cinemas extends React.Component {
  componentDidMount() {
    this.props.getCinemas();
  }

  render() {
    const { cinemas, navigation } = this.props;
    return (
      <View>
        <Text>
          <CinemaList navigation={navigation} />
        </Text>
      </View>
    );
  }
}


export default connect(null, { getCinemas })(Cinemas);
