import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  // ImageIcon,
} from "react-native";
import { Link } from "expo-router";

import React from "react";
// import coffeeIcon from "@/assets/images/coffee.png";
import coffeeImage from "@/assets/images/coffee2.jpg";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={coffeeImage}
        resizeMode="cover"
        style={styles.image}
      >
        {/* <ImageIcon resizeMode="cover" source={coffeeIcon}></ImageIcon> */}
        <Text style={styles.title}>CS</Text>
        <Link href="/contact" style={styles.link} asChild>
          <Pressable>
            <Text style={styles.link}>Contact Us</Text>
          </Pressable>
        </Link>
        <Link href="/menu" style={styles.link} asChild>
          <Pressable>
            <Text style={styles.link}>Menu</Text>
          </Pressable>
        </Link>
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
    textAlign: "left",
    paddingTop: 55,
    paddingLeft: 30
  },
  link: {
    color: "white",
    fontSize: 18,
  },
});
