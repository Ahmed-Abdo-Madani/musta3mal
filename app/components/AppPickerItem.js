import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

const AppPickerItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <AppText text={item.title} onPress={() => console.log(item.value)} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 20,
  },
});

export default AppPickerItem;
