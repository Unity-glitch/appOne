import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import bgImage from '@/assets/images/coffee9.jpg';

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <View style={styles.topHeader}>
          <Text style={styles.title}>Welcome back</Text>
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
          <Text style={styles.signUpBtn}>Sign up</Text>
        </View>
      <ImageBackground source={bgImage} style={styles.bgImageBottom}/>
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
    rowGap: 55,
    height: "100vh",
    justifyContent: "center",
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 12
  },
  bgImageBottom:{
    backgroundSize: 'cover',
    width: '100%',
    height: '45vh',
  },
  title: {
    color: "white",
    fontSize: 28,
    color: "black",
    fontFamily: "consolas",
    textAlign: 'center'
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
  topHeader: {
    flexDirection: "column",
    rowGap: 30,
    marginHorizontal: "auto",
    marginTop: 50
  },
  bottomHeader: {
    flexDirection: "row",
    columnGap: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  formWrapper: {
    flexDirection: "column",
    rowGap: 25,
  },
  forgotPwrdText: {
    color: "#B5651D",
    textDecorationLine: "underline",
    fontSize: 14,
    letterSpacing: 1,
  },
  loginBtn: {
    backgroundColor: "#B5651D",
    width: 120,
    textAlign: "center",
    paddingVertical: 8,
    color: "white",
    fontSize: 14,
    borderRadius: 6,
    letterSpacing: 1,
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
    width: 280,
    justifyContent: "space-between",
  },
});
