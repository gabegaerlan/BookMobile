import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Header, Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import Assets from './Assets';
import Locations from './Locations';
import Alerts from './Alerts';

export class Home extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Header
          leftComponent={<MaterialIcons name="menu" size={30} color="#fff"/>}
          centerComponent={{ text:'BookMobile', style: { color:'#fff', fontSize:25, fontWeight:'bold'}}}
          rightComponent={<MaterialIcons name="home" size={30} color="#fff"/>}
        />
        <View style={[styles.boxContainer,styles.boxOne]}>
          <Image source={require("./img/bkm.jpeg")}/>
        </View>
        <View style={[styles.boxContainer,styles.boxTwo]}>
            <Text style={{color:'white'}}>Text Goes Here</Text>
        </View>
        <View style={[styles.boxContainer,styles.boxThree]}>
            <Button type="clear" title="Main Menu" onPress={() => this.props.navigation.navigate('Home')}/>
            <Button type="clear" title="Location" onPress={() => this.props.navigation.navigate('Locations')}/>
            <Button type="clear" title="Assets" onPress={() => this.props.navigation.navigate('Assets')}/>
            <Button type="clear" title="Alerts" onPress={() => this.props.navigation.navigate('Alerts')}/>
        </View>    
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: Home,
  Locations: Locations,
  Assets: Assets,
  Alerts: Alerts,
});

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;

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
      backgroundColor:'#000000',
      justifyContent:'space-around',
      alignItems:'center',
    },
  });
