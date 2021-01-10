import React from "react";
import { Text, TouchableOpacity, StyleSheet, Platform } from "react-native";

import Colors from "../config/Colors";

function AppButton({ title, color = "primary", onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: Colors[color] }]}
    >
      <Text style={styles.title}>{title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: "gray",
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
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
  title: {
    color: Colors.white,
    fontSize: 18,
    fontFamily:
      Platform.os === "android"
        ? "Roboto"
        : Platform.os === "ios"
        ? "Avenir"
        : "Arial",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default AppButton;
