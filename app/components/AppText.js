import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

import Colors from "../config/Colors";

function AppText({
  text,
  style,
  onPress,
  color = "black",
  size = 18,
  fontWeight = "bold",
  textTransform = "capitalize",
}) {
  return (
    <Text
      style={[
        styles.text,
        { color: Colors[color], fontSize: size, fontWeight, textTransform },
        style,
      ]}
      onPress={onPress}
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
    fontSize: 18,
    fontFamily:
      Platform.os === "android"
        ? "Roboto"
        : Platform.os === "ios"
        ? "Avenir"
        : "Arial",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default AppText;
