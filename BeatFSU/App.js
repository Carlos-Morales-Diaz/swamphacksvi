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
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <View style = {styles.Container}>
        <Text style = {styles.CounterStyle}>
          <Text>Whacks: </Text>
          <Text>{this.state.counter}</Text>
        </Text>

        <TouchableOpacity onPress = { () =>
                                    { this.setState( (prevState) =>
                                                        {return { counter: prevState.counter + 1} } )
                                    }} >

          <Image source={require('./Images/fsu.png')} style={styles.BigButton}/>

        </TouchableOpacity>
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
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  BigButton: {
    alignItems: 'center',
    marginTop: 200,
  },
  CounterContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  }
});
