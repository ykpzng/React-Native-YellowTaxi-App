import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

export default class Tip23List extends Component {
  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.body}><Text style={styles.header}>Start  :</Text> {item.PUBorough}-{item.PUZone}</Text>
            <Text style={styles.body}><Text style={styles.header}>Finish :</Text>{item.DOBorough}-{item.DOZone}</Text>
            <Text style={styles.body}><Text style={styles.header}>Distance :</Text> {item.trip_distance.$numberDouble} mil</Text>
            <Text style={styles.line}>_______________________________________________________</Text>
          </View>
        )}
      />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    fontWeight: 'bold',
    color: "#212227"
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
  },
  line: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 8,
  }
});