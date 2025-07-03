import bgImage from "@/assets/images/coffee9.jpg";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <View style={styles.topHeader}>
          <Text style={styles.title}>Starbucks</Text>
          <View style={styles.formWrapper}>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="mail-outline" size={20} color="black" />
              <TextInput placeholder="Email address" style={styles.inputText} />
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
          </View>
          <View style={styles.loginWrapper}>
            <Text style={styles.forgotPwrdText}>Forgot Password?</Text>
            <View>
              <Text style={styles.loginBtn}>Login</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomHeader}>
          <Text style={styles.fadedtext}>New member?</Text>
          <Link href="/signup" asChild>
            <Pressable>
              <Text style={styles.signUpBtn}>Sign up</Text>
            </Pressable>
          </Link>
        </View>
        <ImageBackground source={bgImage} style={styles.bgImageBottom} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100vh",
    fontFamily: "Arial",
  },
  containerWrapper: {
    flexDirection: "column",
    rowGap: 60,
    height: "100vh",
    justifyContent: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 12,
  },
  bgImageBottom: {
    backgroundSize: "cover",
    width: "100%",
    height: "45vh",
  },
  title: {
    color: "white",
    fontSize: 24,
    color: "black",
    fontFamily: "consolas",
    textAlign: "center",
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
    margin: 'auto'
  },
  topHeader: {
    flexDirection: "column",
    rowGap: 30,
    marginHorizontal: "auto",
    marginTop: 50,
  },
  bottomHeader: {
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  formWrapper: {
    flexDirection: "column",
    rowGap: 25,
  },
  forgotPwrdText: {
    color: "rgb(89, 44, 0)",
    textDecorationLine: "underline",
    fontSize: 14,
    letterSpacing: 1,
  },
  loginBtn: {
    backgroundColor: "rgb(89, 44, 0)",
    width: 110,
    textAlign: "center",
    paddingVertical: 8,
    color: "white",
    fontSize: 14,
    borderRadius: 6,
    letterSpacing: 1
  },
  signUpBtn: {
    color: "#B5651D",
    letterSpacing: 1,
    fontSize: 14,
  },
  fadedtext: {
    color: "rgba(0,0,0,0.3)",
    fontSize: 14,
  },
  loginWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: 250,
    justifyContent: "space-between",
  },
});
