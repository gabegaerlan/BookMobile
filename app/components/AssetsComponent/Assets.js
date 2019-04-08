import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight} from 'react-native';

export default class Assets extends Component{
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
        fetch('https://infinite-forest-19330.herokuapp.com/api/all')
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
                <Text style={styles.rowText}>{user.name}</Text>
                <Text style={styles.rowText}>{user.curator}</Text>
                <Text style={styles.rowText}>{user.genre}</Text>
                <Text style={styles.rowText}>{user.type}</Text>
                <Text style={styles.rowText}>{user.id}</Text>
            </View>
            </TouchableHighlight>
        )
    }

    render(){
        return(
        <ListView 
            dataSource={this.state.userDataSource}
            renderRow={this.renderRow.bind(this)}
        />
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

AppRegistry.registerComponent('Assets', () => Assets);