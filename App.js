import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';
import Home from './app/components/HomeComponent/Home.js';
import Assets from './app/components/AssetsComponent/Assets.js';
import Alerts from './app/components/AlertsComponent/Alerts.js';
import Location from './app/components/LocationComponent/Location.js';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <Alerts/>
      <Location/>
      // <Home/>
      // <Assets/>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },
});

AppRegistry.registerComponent('App',() => App);

