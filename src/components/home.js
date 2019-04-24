import React, {Component} from 'react';
import { StyleSheet, View, Text,Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Header } from 'react-native-elements';


export default class Home extends Component {
    render() {
        return(
            
            <View>
            <Header
            centerComponent={{ text:'BookMobile', style: { color:'#87db59', fontSize:25, fontWeight:'bold'} }}
            containerStyle={{ backgroundColor: '#8f968b'}}
            />
            <Image style={{height:200, width:'auto', alignItems:'stretch', resizeMode:'stretch', marginTop:20}}
            source={require('./img/bookmobileVehicle.png')}
            />
                <View style={{alignItems:'flex-start', marginTop:75}}>
                    <Text>Tfjdklasfjdslakfjadslfasdkfdsalkfjdsa{'\n'}fjdlksajfadskl fjasd</Text>
                </View>
            </View>
        );
    }
}