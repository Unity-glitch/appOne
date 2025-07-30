import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import coffee8 from "../assets/images/coffee66.png";

export default function OnboardingPage() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={coffee8}></Image>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>Select the Favourite Menu</Text>
          <Text style={styles.subTitle}>
            Sip, relax, and enjoy. One click coffee ordering.
          </Text>
        </View>
        <View>
          <Link href="/onboarding2" asChild>
            <Pressable>
              <Text style={styles.button}>Next</Text>
            </Pressable>
          </Link>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text>Skip</Text>
        <View style={styles.dot__Wrapper}>
          <Text style={styles.dotBlur}></Text>
          <Text style={styles.dot}></Text>
          <Text style={styles.dotBlur}></Text>
        </View>
        <View>
          <MaterialIcons
            name="arrow-forward"
            size={25}
            color="rgb(89, 44, 0)"
          />
        </View>
      </View>
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
  wrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: 35,
  },
  title: {
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "arial",
    paddingVertical: "12px",
    letterSpacing: 1,
    marginTop: -140,
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
    lineHeight: 20,
  },
  button: {
    backgroundColor: "rgb(89, 44, 0)",
    width: 250,
    padding: 10,
    color: "white",
    textAlign: "center",
    borderRadius: 6,
    marginHorizontal: "auto",
    fontSize: 14,
    letterSpacing: 1,
    cursor: "pointer",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dot__Wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 3,
  },
  dotBlur: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "rgba(89, 44, 0, 0.5)",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "rgb(89, 44, 0)",
  },
});
