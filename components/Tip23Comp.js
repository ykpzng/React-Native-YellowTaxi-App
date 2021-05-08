import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import SelectionStart from './SelectionStart';
import SelectionEnd from './SelectionEnd';
import Tip23List from './Tip23List';

export default class Tip23Comp extends Component {
  state = {
    data: [],
    startDate: null,
    endDate: null,
    list: false,
  };

  handleStartDate = (date) => {
    this.setState({ startDate: date })
  }
  handleEndDate = (date) => {
    this.setState({ endDate: date })
  }

  fetchData = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        start: this.state.startDate,
        end: this.state.endDate,
      }),
    };
    fetch(
      'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/denemeapi-urbqx/service/deneapi/incoming_webhook/tip2-s3',
      requestOptions,
    )
      .then(response => response.json())
      .then(post => this.setState({ data: post }))
      .catch(err => console.log('Hata : ', err));
  }

  onPressSubmit = () => {
    if (this.state.startDate && this.state.endDate) {
      this.fetchData();
      this.setState({ list: true });
    } else {
      console.log("Değer girmelisiniz..")
    }

  }

  render() {
    console.log("Start : ", this.state.startDate);
    console.log("End : ", this.state.endDate);
    // console.log(this.state.data);
    return (
      <View>
        <Text style={styles.header}> - İki tarih arasında seyahat edilen en kısa mesafeli 5 yolculuk. </Text>
        <SelectionStart handleStartDate={this.handleStartDate} text="Choose Start Date" />
        <SelectionEnd handleEndDate={this.handleEndDate} />
        <View style={styles.list}>
          <Button title="List" onPress={this.onPressSubmit} />
        </View>
        <View style={styles.list}>
          {this.state.list && (
            <Tip23List data={this.state.data} />
          )}
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  list: {
    marginTop: 10,
  },
  header: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#212227",
    paddingTop: 10,
  },
});