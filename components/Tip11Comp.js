import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default class Tip11Comp extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch(
      'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/denemeapi-urbqx/service/deneapi/incoming_webhook/tip1-s1',
    )
      .then(response => response.json())
      .then(post => this.setState({ data: post }))
      .catch(err => console.log('Hata : ', err));
  }

  renderItem = ({ item }) => (
    <View>
      <Text style={styles.title}>
        Date : 12/{item._id.$numberInt}/2020
      </Text>
      <Text style={styles.body}>
        <Text style={{ fontWeight: 'bold' }}>Total Passenger Count : </Text>
        <Text style={styles.count}>{item.totalPassenger.$numberInt}</Text>
      </Text>
    </View>
  )

  render() {
    // console.log("Tip-1 : ", this.state.data[0].id.$numberInt);
    return (
      <View style={styles.container}>
        <Text style={styles.header}> - En fazla yolcu taşınan 5 gün ve toplam yolcu sayıları.</Text>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item._id.$numberInt}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#212227",
    paddingTop: 10,
  },
  title: {
    backgroundColor: '#4392F1',
    color: '#0D0630',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 20,
    marginBottom: 10,
  },
  count: {
    fontWeight: '700',
    color: '#212227',
  }
});
