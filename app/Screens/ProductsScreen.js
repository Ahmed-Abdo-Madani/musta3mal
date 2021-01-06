import React from "react";
import { StyleSheet, View } from "react-native";

import Colors from "../config/Colors";
import Card from "../components/Card";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Card
        image={require("../assets/redJacket.jpg")}
        title="Fabregie Egg"
        subtitle="$552"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primary,
  },
});

export default ViewImageScreen;
