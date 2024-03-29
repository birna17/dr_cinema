import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { getCinemas } from '../../actions/cinemaActions';
import CinemaList from '../../components/CinemaList';
import styles from './styles';



class Cinemas extends React.Component {
  componentDidMount() {
    this.props.getCinemas();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Animatable.Text
          style={styles.header}
          animation="slideInDown"
          iterationCount={1}>
          Kvikmyndahús
        </Animatable.Text>
        <CinemaList
          navigation={navigation}
          onPress={() => navigation.navigate('CinemaDetails', id, name, description, address, phone)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cinemas: state.cinemas
});

export default connect(mapStateToProps, { getCinemas })(Cinemas);
