import React, {Component} from 'react';
import { StyleSheet, View, Text,} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Header } from 'react-native-elements';


export default class Locations extends Component {
    render() {
        return(
          <View style={{flex:1,alignItems:'center', backgroundColor:'#ddd'}}>
          <Header
          centerComponent={{ text:'BookMobile', style: { color:'#87db59', fontSize:25, fontWeight:'bold'} }}
          containerStyle={{ backgroundColor: '#8f968b'}}
          />
              <Text>Locations!!</Text>
          </View>
        );
    }
}