import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

class Counter extends React.Component {
  state = {
    counter: 0
  }

  render() {
    const {counter} = this.state
    return (
      <View style = {styles.Container}>
      <Text style = {styles.CounterStyle}>
      {"Whacks: " + counter}
      </Text>

      <Button onPress = {() => {this.setState(prevState => ({ counter: prevState.counter + 1}))}} >
      <TouchableOpacity style = {styles.BigButton}>
      <Image source={require('images/fsu.png')} style={styles.BigButton}/>
      </TouchableOpacity>
      </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  CounterStyle: {
    alignItems: 'center',
    marginTop: 50,
  },
  BigButton: {
    alignItems: 'center',
    marginTop: 200,
  },
});
