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
  Alert,
} from 'react-native';
import CountDown from 'react-native-countdown-component';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      spinValue: new Animated.Value(0),
      ongoingAnimation: false,
      timeLimit: 30,
      restart: 0,
    }
  }

  restartGame() {
    this.setState( (prevState) => {
      return {
        counter: 0,
        restart: prevState.restart + 1,
      }
    });
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

          //new game
        //   <CountDown
        //   key = {this.restart}
        //   style = {styles.CountdownStyle}
        //   until={this.state.timeLimit}
        //   size={30}
        //   digitStyle={{backgroundColor: 'black'}}
        //   digitTxtStyle={{color: 'gold'}}
        //   timeToShow={['S']}
        //   timeLabels={{s: 'SS'}}
        //   onFinish={() => {
        //     // return(
        //     <Button onPress = { () => {
        //       Alert.alert ( 'Title', 'Msg',
        //       [
        //         {text: 'Okay',
        //         onPress: () => { this.restartGame(); }
        //       }
        //     ]);
        //   }}
        //   />
        // />
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
