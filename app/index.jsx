import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";

import React from "react";
import coffeeImage from "@/assets/images/coffee2.jpg";



const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={coffeeImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>
        <Link href="/explore" style={styles.link}>Explore</Link>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: 'rgba(0,0,0, 0.5)',
    height: '100%',
    padding: 50
  },
  link: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textDecorationLine: 'underline',
    textAlign: "center",
    padding: 0
  },
});
