import React, {Component} from 'react';
import {View} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { Header } from 'react-native-elements';


ACCESS_TOKEN = 'pk.eyJ1IjoibW9iaXVzLTgiLCJhIjoiY2p1Ym5rbmJzMGZleTRkbGx3dDlqcWZndCJ9.l4ai8KgBPtO2qyxWZPscWA'

MapboxGL.setAccessToken(ACCESS_TOKEN);

const montereyBayCoordinates = [
    -121.796796, 36.652451
];

export default class App extends Component{
  render () {
    return (
      <View style={{flex: 1}}>
          <Header
          centerComponent={{ text:'BookMobile', style: { color:'#87db59', fontSize:25, fontWeight:'bold'} }}
          containerStyle={{ backgroundColor: '#8f968b'}}
          />
          <MapboxGL.MapView
          ref={(c) => this._map = c}
          style={{flex: 1}}
          zoomLevel={10}
          centerCoordinate={montereyBayCoordinates}>
        </MapboxGL.MapView>
      </View>
      );
  }
}

// import React, {Component} from 'react';
// import { StyleSheet, View, Text,} from 'react-native';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import { Header } from 'react-native-elements';


// export default class Locations extends Component {
//     render() {
//         return(
//           <View style={{flex:1,alignItems:'center', backgroundColor:'#ddd'}}>
//           <Header
//           centerComponent={{ text:'BookMobile', style: { color:'#87db59', fontSize:25, fontWeight:'bold'} }}
//           containerStyle={{ backgroundColor: '#8f968b'}}
//           />


          
//               <Text>Locations!!</Text>
//           </View>
//         );
//     }
// }