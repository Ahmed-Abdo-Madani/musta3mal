import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";

import Colors from "../config/Colors";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.statusbar}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  statusbar: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    paddingTop: Constants.statusBarHeight,
  },
});
