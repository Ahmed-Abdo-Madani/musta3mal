import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../config/Colors";

export default function ListingEditButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={Colors.white}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    borderWidth: 8,
    borderColor: Colors.white,
    backgroundColor: Colors.primary,
    height: 80,
    justifyContent: "center",
    bottom: 30,
    width: 80,
  },
});
