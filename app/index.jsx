import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

import React from "react";
import coffeeImage from "@/assets/images/coffee3.jpg";

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
          <Link href="/login" asChild>
            <Pressable>
              <Text style={styles.buttonGetStarted}>Get Started</Text>
            </Pressable>
          </Link>
        </View>
        {/* <View style={styles.imageLogoWrapper}>
          <Image style={styles.imageLogo} source={logoCoffee}></Image>
          <Text style={styles.title}>Caféza</Text>
        </View> */}
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
    rowGap: "15px",
    height: "100vh",
    justifyContent: "center",
    marginTop: "145px",
    padding: "15px",
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
    backgroundColor: "#B5651D",
    width: "160px",
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: "20px",
    marginHorizontal: "auto",
    letterSpacing: 1,
    fontSize: "14px",
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
