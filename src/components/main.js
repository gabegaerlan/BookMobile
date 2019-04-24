import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './home';
import Locations from './locations';
import Assets from './assets';
import Alerts from './alerts';
import Search from './search';


class HomeScreen extends React.Component {
  render() {
    return (
        <Home/>
    );
  }
}

class LocationsScreen extends React.Component {
  render() {
    return (
        <Locations/>
    );
  }
}

class AssetsScreen extends React.Component {
    render() {
      return (
          <Search/>
      );
    }
}

class AlertsScreen extends React.Component {
    render() {
      return (
          <Alerts/>
      );
    }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Locations: LocationsScreen,
  Assets: AssetsScreen,
  Alerts: AlertsScreen,
});

export default createAppContainer(TabNavigator);