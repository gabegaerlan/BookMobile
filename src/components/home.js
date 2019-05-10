import React, {Component} from 'react';
import { StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Header, Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler'

export default class Home extends Component {
    render() {
        return(
            
            <View style= {{flex:1}}>
           
            <Header 
            centerComponent={{ text:'BookMobile', style: { color:'#87db59', fontSize:25, fontWeight:'bold'} }}
            containerStyle={{ backgroundColor: '#8f968b'}}
            />
            <ScrollView>
            <Image style={{height:200, width:'auto', alignItems:'stretch', resizeMode:'stretch', marginTop:20}}
            source={require('./img/bookmobileVehicle.png')}
            />
                <View style={{alignItems:'flex-start', marginTop:30, marginLeft: 25, marginRight: 25}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Futura'}}> Welcome to the BookMobile Application!</Text>
                </View>

                <View style={{alignItems:'flex-start', marginTop:30, marginLeft: 25, marginRight: 25}}> 
                    <Text style={{fontSize: 19, fontWeight: 'bold', fontFamily: 'Futura'}}>
                        Santa Clara Library: Mission Statement
                    </Text>

                    <Text style = {{fontFamily: 'Futura'}}>
                    The Santa Clara County Library District is an open forum promoting knowledge, ideas, and cultural enrichment. The library provides free access to informational, educational, and recreational materials and services. In response to community needs, the library provides diverse resources on a wide variety of subjects and viewpoints and helps people use these resources.
                    </Text>
                </View>
                
                
                <View style={{marginTop:30}}>
                <Image
                    source={ require('./img/bookmobilePeople.jpg') }  
                    style={{ width: 'auto', height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                </View>

                
                <View style={{ marginTop:30, marginBottom: 30,  marginLeft: 25, marginRight: 25}}> 
                    <Text style={{fontSize: 19, fontWeight: 'bold', fontFamily: 'Futura'}}>
                         Our Purpose
                    </Text>

                    <Text style = {{fontFamily: 'Futura'}}> 
                    The Santa Clara County Library District Bookmobile provides personalized, comprehensive library service to people who may have difficulty visiting a community library - including seniors, individuals with physical limitations, children, and geographically remote residents in the cities of:
                    {'\n'}
                    {'\n'}
                    Campbell
                    {'\n'}
                    Cupertino 
                    {'\n'}
                    Gilroy
                    {'\n'} 
                    Los Altos
                    {'\n'}
                    Milpitas
                    {'\n'}
                    Morgan Hill
                    {'\n'}
                    Saratoga
                    {'\n'}
                    Unincorporated areas of Santa Clara County
                    {'\n'}
                    </Text>
                </View>


                <View style={{ marginTop:30, marginBottom: 30,  marginLeft: 25, marginRight: 25}}> 
                
                    <Text style={{fontSize: 19, fontWeight: 'bold', fontFamily: 'Futura'}}>
                         Placing Requests
                    </Text>

                    <Text style = {{fontFamily: 'Futura'}}>
                    Items not found on the Bookmobile may be reserved and delivered. You may place a request:
                    </Text>
                    <Text style = {{fontFamily: 'Futura'}}>
                    {'\n'}
                    In person
                    {'\n'}
                    Through the online catalog
                    {'\n'}
                    By calling the Bookmobile Office at 408.293-2326 ext. 3060.
                    </Text>
                </View>


                <View style={{ marginTop:30, marginBottom: 30,  marginLeft: 25, marginRight: 25}}> 
                
                <Text style={{fontSize: 19, fontWeight: 'bold', fontFamily: 'Futura'}}>
                     Contacting the BookMobile Staff
                </Text>

                <Text style = {{fontFamily: 'Futura'}}>
                If you have any questions, comments or requests, you may call the bookmobile office at (408) 293-2326 x3060. Our office hours are Monday through Friday, 9 to 5. Please leave a message if the staff is out.
                </Text>
                
            </View>


            </ScrollView>
            </View>
        );
    }
} 