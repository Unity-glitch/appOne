import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import bottomImage from "@/assets/images/coffee5.jpg";
import googleIcon from "@/assets/images/googleIcon.png";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starbucks</Text>
      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="person-outline" size={20} color="black" />
          <TextInput placeholder="Full Name" style={styles.inputText} />
        </View>
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
      </View>
      <View style={styles.btnWrapper}>
        <View>
          <ImageBackground source={googleIcon} style={styles.googleIcon} />
        </View>
        <Link href="" asChild>
          <Pressable>
            <Text style={styles.btn2}>Connect with Google</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles.loginWrapper}>
        <Text style={styles.subText}>Alreaady have an account?</Text>
        <Link href="/login" asChild>
          <Pressable>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </Link>
      </View>
      <ImageBackground source={bottomImage} style={styles.bottomImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  bottomImage: {
    width: "100%",
    height: "25vh",
    resizeMode: "contain",
    borderRadius: 20,
  },
  title: {
    fontSize: "20px",
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
    width: 250,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 10,
  },
  formWrapper: {
    flexDirection: "column",
    rowGap: 25,
    marginTop: 12,
    margin: "auto",
  },
  register: {
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
  forgotPassword: {
    color: "rgb(175, 0, 0)",
    paddingLeft: 20,
  },
  googleIcon: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  btn2: {
    fontSize: 13,
    letterSpacing: 1,
  },
  btnWrapper: {
    flexDirection: "row",
    columnGap: 5,
    justifyContent: "center",
    backgroundColor: "#D3D3E3",
    width: 250,
    padding: 10,
    color: "white",
    textAlign: "center",
    borderRadius: 6,
    marginHorizontal: "auto",
    marginVertical: 10,
    fontSize: 14,
    cursor: "pointer",
  },
  loginWrapper: {
    flexDirection: "column",
    rowGap: 5,
    justifyContent: "center",
    marginHorizontal: "auto",
    width: 250,
  },
  subText: {
    fontSize: 13,
    letterSpacing: 1,
    color: 'rgba(0,0,0,0.6)'
  },
  loginText: {
    backgroundColor: "rgb(89, 44, 0)",
    width: 250,
    textAlign: "center",
    paddingVertical: 8,
    color: "white",
    fontSize: 14,
    borderRadius: 6,
    letterSpacing: 1,
  },
});
