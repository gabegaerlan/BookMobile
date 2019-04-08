import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import { Header, Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class Location extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Header
          leftComponent={<MaterialIcons name="menu" size={30} color="#fff"/>}
          centerComponent={{ text:'BookMobile', style: { color:'#fff', fontSize:25, fontWeight:'bold'}}}
          rightComponent={<MaterialIcons name="home" size={30} color="#fff"/>}
        />
        <View style={[styles.boxContainer,styles.boxOne]}>
            <Text style={{color:'white'}}>Input Image Here</Text>
        </View>
        <View style={[styles.boxContainer,styles.boxTwo]}>
            <Text style={{color:'white'}}>Text Goes Here</Text>
        </View>
        <View style={[styles.boxContainer,styles.boxThree]}>
            <Button title="Main Menu"/>
            <Button title="Location"/>
            <Button title="Assets"/>
            <Button title="Alerts"/>
        </View>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'column',
    },
    boxContainer: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    boxOne: {
      flex:2,
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:'center',
  
    },
    boxTwo: {
      flex:3,
      backgroundColor:'gray',
      justifyContent:'center',
      alignItems:'center',
  
    },
    boxThree: {
      flex:1,
      flexDirection:'row',
      backgroundColor:'red',
      justifyContent:'space-around',
      alignItems:'center',
    },
  });

  AppRegistry.registerComponent('Home',() => Home);

