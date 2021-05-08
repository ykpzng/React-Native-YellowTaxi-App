import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          style={styles.logo}
          source={require('../assets/taxi.png')}
        />
        <View style={styles.body}>
          <Text style={styles.header}>Tip-1</Text>
          <Text style={styles.text2}>- En fazla yolcu taşınan 5 gün ve toplam yolcu sayıları.</Text>
          <Text style={styles.header}>Tip-2</Text>
          <Text style={styles.text2}>- İki tarih arasında seyahat edilen en kısa mesafeli 5 yolculuk.</Text>
          <Text style={styles.header}>Tip-3</Text>
          <Text style={styles.text2}>- Seçilen bir gün içerisindeki en uzun yolculuğun rotasının harita üzerinde gösterimi.</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightcoral',
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20
  },
  header: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: 5,
    color: "blue"
  },
  body: {
    marginTop: 15,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },
  text2: {
    fontWeight: '500',
    fontSize: 18,
    marginTop: 5,
  },
  line: {
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 8,
  }

});