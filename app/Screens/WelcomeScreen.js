import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },

  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/bg.jpg")}
      style={styles.background}
    >
      <View style={styles.loginBtn} />
      <View style={styles.registerBtn} />
    </ImageBackground>
  );
}

export default WelcomeScreen;
