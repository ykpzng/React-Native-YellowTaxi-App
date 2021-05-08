import * as React from 'react';
import SelectionStart from './SelectionStart';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import GOOGLE_MAPS_APIKEY from '../apikey';
import Geocoder from 'react-native-geocoding';
import MapList from './MapList';


export default class Tip33Comp extends React.Component {
  state = {
    data: {},
    day: null,
    origin: {},
    destination: {},
    originName: "",
    destinationName: "",
    orj: false,
    dest: false
  }

  handleStartDate = (date) => {
    this.setState({ day: date })
  }

  fetchData = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        day: this.state.day,
      }),
    };
    fetch(
      'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/denemeapi-urbqx/service/deneapi/incoming_webhook/tip3-s1',
      requestOptions,
    )
      .then(response => response.json())
      .then(post => {
        this.setState({ data: post })
        const originAd = `${post[0].DOBorough[0]} ${post[0].DOZone[0]}`;
        const destinationAd = `${post[0].PUBorough[0]} ${post[0].PUZone[0]}`;
        this.setState({ originName: originAd, destinationName: destinationAd });
        console.log('origin : ', originAd);
        console.log('destination : ', destinationAd);
        this.findOrigin(originAd);
        this.findDestination(destinationAd);
      })
      .catch(err => console.log('Hata : ', err));
  }

  findOrigin = (originAd) => {
    Geocoder.init(GOOGLE_MAPS_APIKEY, { language: "en" });
    Geocoder.from(originAd)
      .then(json => {
        var location = json.results[0].geometry.location;
        this.setState({ origin: location, orj: true });
        console.log("origin : ", location);
      })
      .catch(error => console.warn(error));
  }

  findDestination = (destinationAd) => {
    Geocoder.init(GOOGLE_MAPS_APIKEY, { language: "en" });
    Geocoder.from(destinationAd)
      .then(json => {
        var location = json.results[0].geometry.location;
        this.setState({ destination: location, dest: true });
        console.log("destination : ", location);
      })
      .catch(error => console.warn(error));
  }



  onPressSubmit = async () => {
    await this.fetchData();
  }

  render() {

    const fullfilled = this.state.orj && this.state.dest;
    return (
      <View>
        <SelectionStart handleStartDate={this.handleStartDate} text="Choose Date" />
        <Button title="Draw Route" onPress={this.onPressSubmit} />
        {fullfilled && (
          <MapList origin={this.state.origin} destination={this.state.destination} originName={this.state.originName} destinationName={this.state.destinationName} />
        )}

      </View>
    )
  }
}






