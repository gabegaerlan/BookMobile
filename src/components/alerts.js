import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Header } from 'react-native-elements';

export default class Alerts extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds,
        };
    }

    componentDidMount(){
        this.fetchUsers();
    }

    fetchUsers(){
        fetch('https://capstone-notification-server.herokuapp.com/notifications/all')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    userDataSource: this.state.userDataSource.cloneWithRows(response)
                });
            });
    }

    // onPress(user){
    //     this.props.navigator.push({
    //         id: 'component6',
    //         user: user
    //     });
    // }

    renderRow(user, sectionId, rowId, highlightRow){
        return(
            <TouchableHighlight onPress={() => {this.onPress(user)}}>
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.alertID}</Text>
                <Text style={styles.rowText}>{user.description}</Text>
            </View>
            </TouchableHighlight>
        )
    }

    render(){
        return(
            // Header code goes under View
            <View style={{flex:1, backgroundColor:'#ddd'}}>
                <Header
                centerComponent={{ text:'BookMobile', style: { color:'#87db59', fontSize:25, fontWeight:'bold'} }}
                containerStyle={{ backgroundColor: '#8f968b'}}
                />
                <ListView 
                    dataSource={this.state.userDataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:20,
        backgroundColor: '#f4f4f4',
        marginBottom:3
    },
    rowText: {
        flex:1
    }
});

AppRegistry.registerComponent('Alerts', () => Alerts);