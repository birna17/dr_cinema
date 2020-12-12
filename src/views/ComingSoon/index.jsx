import React from 'react';
import {
  View, TouchableHighlight, Text, Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { getComingSoon } from '../../actions/comingSoonActions';
import ComingSoonList from '../../components/ComingSoonList';
import styles from './styles';

class ComingSoon extends React.Component {
  componentDidMount() {
    this.props.getComingSoon();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Animatable.Text
          style={styles.header}
          animation="slideInDown"
          iterationCount={1}
        >
          Væntanlegt í bíó
        </Animatable.Text>
        <ComingSoonList />
      </View>
    );
  }
}


export default connect(null, { getComingSoon })(ComingSoon);
