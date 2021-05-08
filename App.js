import React from "react";
import { StyleSheet, Text, View, ScrollView, AppRegistry, SafeAreaView } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Home from "./components/Home";
import Tip11Comp from "./components/Tip11Comp";
import Tip23Comp from "./components/Tip23Comp";
import Tip33Comp from "./components/Tip33Comp";

export default App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.menuItem}>Home</Text>
        </Link>
        <Link
          to="/tip11"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text style={styles.menuItem}>Tip-1</Text>
        </Link>
        <Link
          to="/tip23"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text style={styles.menuItem}>Tip-2</Text>
        </Link>
        <Link
          to="/tip33"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text style={styles.menuItem}>Tip-3</Text>
        </Link>
      </View>
      <ScrollView style={styles.components}>
        <Route exact path="/" component={Home} />
        <Route path="/tip11" component={Tip11Comp} />
        <Route path="/tip23" component={Tip23Comp} />
        <Route path="/tip33" component={Tip33Comp} />
      </ScrollView>
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
    padding: 10,
  },
  components: {
    // marginTop: 25,
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: '#3c3744',

  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subNavItem: {
    padding: 5
  },
  menuItem: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F1F2F6'
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

