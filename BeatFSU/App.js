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
import CountDown from 'react-native-countdown-component';

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
      <View style={styles.Container}>
      <Text style={styles.CounterStyle}>
      <Text>Whacks: </Text>
      <Text>{this.state.counter}</Text>
      </Text>

      {
        !(this.state.ongoingAnimation) ?
        <TouchableOpacity onPress={() => {
          this.setState(
            (prevState) => {
              return {
                counter: prevState.counter + 1,
                ongoingAnimation: true
              }
            });

            Animated.timing(
              this.state.spinValue,
              {
                toValue: 1,
                duration: 100,
                easing: Easing.linear,
                useNativeDriver: true
              }
            ).start(() => {
              Animated.timing(
                this.state.spinValue,
                {
                  toValue: 0,
                  duration: 100,
                  easing: Easing.linear,
                  useNativeDriver: true
                }
              ).start(() => { this.setState({ ongoingAnimation: false }) });
            });
          }} >
          <Image

          source={require('./Images/fsu.png')} style={styles.BigButton} />
          </TouchableOpacity>
          :
          <Image source={require('./Images/fsu.png')} style={styles.BigButton} />
        }


        <Animated.Image
        style={
          {
            marginLeft: 80,
            marginTop: -350,
            width: 150.95652174,
            height: 200,
            resizeMode: 'stretch',
            transform: [{
              rotate: this.state.spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '90deg']
              })
            }]
          }}
          
          source={require('./Images/tomahawk.png')} />
          <CountDown style = {styles.CountdownStyle}
          until={10}
          size={30}
          digitStyle={{backgroundColor: 'black'}}
          digitTxtStyle={{color: 'gold'}}
          timeToShow={['S']}
          timeLabels={{s: 'SS'}}
          onFinish={() => {
            alert('Final Whacks: ' + this.state.counter),
            this.state.counter = 0;
          }
        }
          />
          </View>

        );
      }
    }

    const styles = StyleSheet.create({
      Container: {
        flex: 1,
        backgroundColor: 'white',
      },
      CounterStyle: {
        fontSize: 24,
        color: 'black',
        lineHeight: 24,
        textAlign: 'center',
        marginTop: 100,
      },
      BigButton: {
        marginLeft: 100,
        marginTop: 200,
      },
      CounterContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
      },
      CountdownStyle: {
        marginTop: 300,
      },
    });
