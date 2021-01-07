import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../config/Colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
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
  deleteIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
