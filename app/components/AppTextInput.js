import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DefaultStyles from "../config/DefaultStyles";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.icon}
        name={icon.name}
        size={icon.size || 20}
        color={icon.color || DefaultStyles.colors.darkGray}
      />
      <TextInput style={DefaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: DefaultStyles.colors.meduimGray,
    borderRadius: 25,
  },
  icon: {
    marginRight: 7,
  },
});
