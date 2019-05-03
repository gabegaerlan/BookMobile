import React, {Component} from 'react';
import {Text, StyleSheet, View, ListView, TextInput, ActivityIndicator, Alert, Image} from 'react-native';
import { Header } from 'react-native-elements';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            text: '',
        }
        this.arrayholder = [];
    }

    componentDidMount() {
        return fetch('https://infinite-forest-19330.herokuapp.com/assets')
        .then((response) => response.json())
        .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
            this.setState({
                isLoading: false,
                dataSource: ds.cloneWithRows(responseJson),
            }, function() {
                this.arrayholder = responseJson;
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }
    checkIfReserved(data){
        if(data == true){
            Alert.alert('Item is reserved');
        }else{
            Alert.alert(
                'Item is not reserved',
                'Would You Like To Reserve?',
                [
                    {text: 'Reserve', onPress: () => console.log('Reserved!')},
                    
                ],
                {cancelable: false},
            );
        }
    }
    GetListViewItem(name) {
        Alert.alert(
            name,
            'This could show stock',
            [
                {text: 'Reserve', onPress: () => console.log('reserve pressed')},
            ],
            {cancelable: false},
        );
    }
    SearchFilterFunction(text) {

        const newData = this.arrayholder.filter(function(item){
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
    }

    ListViewItemSeparator = () => {
        return(
            <View style={{
                height: .5,
                width:'100%',
                backgroundColor:'#000',
            }}>
            </View>
        );
    }
    render() {
        if(this.state.isLoading) {
            return(
                <View style={{flex:1,paddingTop:20}}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return(
            <View style={styles.MainContainer}>
                <TextInput 
                style={styles.TextInputStyleClass}
                onChangeText={(text) => this.SearchFilterFunction(text)}
                value={this.state.text}
                underlineColorAndroid='transparent'
                placeholder='Search By Title'
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderSeparator={this.ListViewItemSeparator}
                    renderRow={(rowData) =>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Image source = {{uri: rowData.imageURL}} style={styles.imageViewContainer} />
                        <Text style={styles.rowViewContainer} 
                        onPress={this.checkIfReserved.bind(this,rowData.reserved)}>
                        {rowData.name}{'\n'}
                        Curator:{rowData.curator}{'\n'}
                        Genre:{rowData.genre}{'\n'}
                        Type:{rowData.type}{'\n'}
                        </Text>
                    </View>}
                    enableEmptySections={true}
                    
                    style={{marginTop:10}}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
 
    MainContainer :{
   
     justifyContent: 'center',
     flex:1,
     margin: 7,
     marginTop: 20
    
     },
    
    rowViewContainer: {
      fontSize: 17,
      padding: 10
     },
   
     TextInputStyleClass:{

      textAlign: 'center',
      height: 40,
      marginTop:35,
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7 ,
      backgroundColor : "#FFFFFF"
           
      },

      imageViewContainer: {
          width:'30%',
          height:100,
          margin:10,
          borderRadius:10
      },
    
});