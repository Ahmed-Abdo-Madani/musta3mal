import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Colors from "../config/Colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/pd1.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    backgroundColor: Colors.secondary,
    position: "absolute",
    width: 50,
    height: 50,
    top: 30,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: Colors.primary,
    position: "absolute",
    width: 50,
    height: 50,
    top: 30,
    right: 30,
  },
});

export default ViewImageScreen;
