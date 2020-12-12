import React from 'react';
import {
  View, Text, TouchableHighlight, ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import logo from '../../resources/Logo1.png';

class Main extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Animatable.Image
            animation="slideInDown"
            iterationCount={1}
            style={styles.logo}
            source={logo}
            direction="alternate"
            />
          <View style={{ padding: 20 }}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Cinemas')}
            >
              <Text style={styles.buttonText}>Kvikmyndahús</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.props.navigation.navigate('ComingSoon')}
            >
              <Text style={styles.buttonText}>Væntanlegar í bíó</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Main;
