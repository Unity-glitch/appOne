import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <View style={styles.title}>Sign In</View>
        <View style={styles.subTitle}>Welcome back</View>
        <View style={styles.formWrapper}>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="mail-outline" size={22} color="#B5851D" />
            <TextInput placeholder="Email address" style={styles.inputText} />
          </View>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock-outline" size={22} color="#B5851D" />
            <TextInput placeholder="Password" style={styles.inputText} />
          </View>
        </View>
      </View>
      <View style={styles.bottomHeader}></View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    height: "100vh",
    fontFamily: "Consolas",
  },
  title: {
    color: "white",
    letterSpacing: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  subTitle: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 14,
  },
  inputText: {
    color: "black",
    fontSize: 12,
    color: "rgba(0,0,0, 0.5)",
    paddingBottom: 3,
    width: 200,
  },
  inputWrapper: {
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center",
  },
  topHeader: {},
  bottomHeader: {},
  formWrapper: {},
});
