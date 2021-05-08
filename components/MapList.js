import * as React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import GOOGLE_MAPS_APIKEY from '../apikey';


export default class MapList extends React.Component {
  render() {
    const { origin, destination } = this.props;
    console.log("or : ", origin)
    console.log("des : ", destination)
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          provider={MapView.PROVIDER_GOOGLE}
          region={{
            latitude: origin["lat"],
            longitude: origin["lng"],
            latitudeDelta: 0.0922,  //922
            longitudeDelta: 0.0421, //421
          }}>
          <Marker title={this.props.originName} pinColor="green" coordinate={{ latitude: origin["lat"], longitude: origin["lng"] }} />
          <Marker title={this.props.destinationName} pinColor="red" coordinate={{ latitude: destination["lat"], longitude: destination["lng"] }} />
          <MapViewDirections
            origin={{ latitude: origin["lat"], longitude: origin["lng"] }}
            destination={{ latitude: destination["lat"], longitude: destination["lng"] }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={10}
            strokeColor="hotpink"
          />

        </MapView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});