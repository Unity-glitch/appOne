import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Link } from "expo-router";

import topImage from "@/assets/images/coffee5.jpg";
import googleIcon from "@/assets/images/googleIcon.png";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Starbucks</Text>
      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="mail-outline" size={20} color="black" />
          <TextInput placeholder="Email Address" style={styles.inputText} />
        </View>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="lock-outline" size={20} color="black" />
          <TextInput
            secureTextEntry={!passwordVisible}
            placeholder="Password"
            style={styles.inputText}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <MaterialIcons
              name={passwordVisible ? "visibility" : "visibility-off"}
              size={18}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="lock-outline" size={20} color="black" />
          <TextInput
            secureTextEntry={!passwordVisible}
            placeholder="Confirm Password"
            style={styles.inputText}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <MaterialIcons
              name={passwordVisible ? "visibility" : "visibility-off"}
              size={18}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.register}>Register</Text>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>
      <View style={styles.btnWrapper}>
        <View>
          <ImageBackground source={googleIcon} style={styles.googleIcon} />
        </View>
        <Text style={styles.btn2}>Connect with Google</Text>
      </View>
      <ImageBackground source={topImage} style={styles.topImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  topImage: {
    width: "100%",
    height: "20vh",
    resizeMode: "contain",
    borderRadius: 20,
  },
  title: {
    fontSize: "22px",
    textAlign: "center",
    fontFamily: "arial",
    paddingVertical: "12px",
    letterSpacing: 1,
  },
  inputText: {
    color: "black",
    fontSize: 14,
    color: "rgba(0,0,0, 0.5)",
    paddingBottom: 3,
    width: 200,
    borderLeftWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingLeft: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    width: 280,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 10,
  },
  formWrapper: {
    flexDirection: "column",
    rowGap: 25,
    marginTop: 12
  },
  register: {
    backgroundColor: "rgb(89, 44, 0)",
    width: 250,
    padding: 10,
    color: "white",
    textAlign: "center",
    borderRadius: 20,
    marginHorizontal: "auto",
    fontSize: 14,
  },
  btn2: {
    // color: 'white'
  },
  forgotPassword: {
    color: 'rgb(175, 0, 0)'
  },
  googleIcon: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  btnWrapper: {
    flexDirection: "row",
  },
});
