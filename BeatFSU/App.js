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
  Animated,
  Easing,
} from 'react-native';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      spinValue: new Animated.Value(0),
      ongoingAnimation: false
    }
  }

  render() {
    return (
      <View style = {styles.Container}>
        <Text style = {styles.CounterStyle}>
          <Text>Whacks: </Text>
          <Text>{this.state.counter}</Text>
        </Text>

        {
          !(this.state.ongoingAnimation) ?
          <TouchableOpacity onPress = { () => { 
                                                this.setState( 
                                                      (prevState) => {
                                                          return { counter: prevState.counter + 1,
                                                                   ongoingAnimation: true } 
                                                                  } );
                                                
                                                Animated.timing(
                                                  this.state.spinValue,
                                                  {
                                                    toValue: 1,
                                                    duration: 100,
                                                    easing: Easing.linear,
                                                    useNativeDriver: true
                                                  }
                                                ).start( () => {
                                                  Animated.timing(
                                                    this.state.spinValue,
                                                    {
                                                      toValue: 0,
                                                      duration: 100,
                                                      easing: Easing.linear,
                                                      useNativeDriver: true
                                                    }
                                                  ).start( () => 
                                                          { this.setState( {ongoingAnimation: false} ) } );
                                                });
                                              }} >
            <Image source={require('./Images/fsu.png')} style={styles.BigButton}/>
          </TouchableOpacity>
          :
          <Image source={require('./Images/fsu.png')} style={styles.BigButton}/>
        }

        <Animated.Image 
            style = { { transform: [{rotate: this.state.spinValue.interpolate({
                                                                                inputRange: [0, 1],
                                                                                outputRange: ['0deg', '-90deg']
                                                                              })
                                    }]
                    } }
            source={require('./Images/tomohawk.png')} />

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
  },
  Tomahawk: {
    alignItems: 'center'
  }
});
