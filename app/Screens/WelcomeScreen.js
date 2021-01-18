import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Platform,
} from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/bg.jpg")}
      blurRadius={2}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/muslogo.png")} />
        <AppText text="easy , fast & trusted" color="white" />
      </View>
      <View style={styles.btnContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  btnContainer: {
    width: "100%",
    padding: 10,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 150,
    marginVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: "gray",
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
      },
      android: {
        elevation: 10,
      },
      web: {
        shadowColor: "gray",
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
      },
    }),
  },
});
export default WelcomeScreen;
