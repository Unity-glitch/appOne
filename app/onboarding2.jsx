import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Link } from "expo-router";
import coffee8 from "../assets/images/coffee6b.png";

export default function Onboarding2Page() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={coffee8}></Image>
      <Text style={styles.title}>Select the Favourite Menu</Text>
      <Text style={styles.subTitle}>
        Sip, relax, and enjoy. One click coffee ordering.
      </Text>
      <Link href="/onboarding2" asChild>
        <Pressable>
          <Text>Next</Text>
        </Pressable>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    marginTop: -110,
  },
  title: {
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "arial",
    paddingVertical: "12px",
    letterSpacing: 1,
    marginTop: -120,
    fontWeight: "bold",
    width: 200,
    marginHorizontal: "auto",
    lineHeight: 30,
  },
  subTitle: {
    fontSize: 13,
    textAlign: "center",
    fontFamily: "arial",
    letterSpacing: 1,
    marginHorizontal: "auto",
    lineHeight: 20,
  },
});
