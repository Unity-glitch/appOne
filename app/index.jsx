import { Link } from "expo-router";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import coffeeImage from "@/assets/images/coffee3.jpg";
import React from "react";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={coffeeImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.heroSection}>
          <Text style={styles.title}>
            Fall in Love with Coffee in Blissful Delight!
          </Text>
          <Text style={styles.subTitle}>
            Welcome to our cozy coffee corner, where every cup is delightful for
            you.
          </Text>
          <Link href="/signup" asChild>
            <Pressable>
              <Text style={styles.buttonGetStarted}>Get Started</Text>
            </Pressable>
          </Link>
        </View>
        <TouchableOpacity></TouchableOpacity>
        {/* <Link href="/menu" style={styles.link} asChild>
          <Pressable>
            <Text style={styles.link}>Menu</Text>
          </Pressable>
        </Link>
        <Link href="/contact" style={styles.link} asChild>
          <Pressable>
            <Text style={styles.link}>Contact Us</Text>
          </Pressable>
        </Link> */}
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "60%",
    flex: 1,
    resizeMode: "cover",
  },
  heroSection: {
    display: "flex",
    flexDirection: "column",
    rowGap: 15,
    height: '100%',
    justifyContent: "center",
    marginTop: 145,
    padding: 15,
  },
  title: {
    color: "white",
    fontSize: 24,
    letterSpacing: 1,
    fontWeight: "bold",
    fontFamily: "Consolas",
    textAlign: "center",
    lineHeight: 28
  },
  subTitle: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontFamily: 'Consolas',
    lineHeight: 22
    
  },
  buttonGetStarted: {
    color: "white",
    backgroundColor: 'rgb(140, 70, 0)',
    width: 160,
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 6,
    marginHorizontal: "auto",
    letterSpacing: 1,
    fontSize: 14,
    fontFamily: 'Open Sans'
  },
  link: {
    color: "white",
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 8,
    letterSpacing: 1,
  },
  imageLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  imageLogoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 35,
  },
});
