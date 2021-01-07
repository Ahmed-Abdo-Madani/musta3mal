import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import Colors from "../config/Colors";
import ListingItem from "../components/ListingItem";

export default function ProductDetails() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/redJacket.jpg")} />
      <View style={styles.titleContainer}>
        <AppText text="Fabrige Egg" />
        <AppText text="$600" color="secondary" />
      </View>
      <ListingItem
        image={require("../assets/redJacket.jpg")}
        title="the peacock"
        subtitle="56 listings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  image: {
    width: "100%",
    height: "35%",
  },
  titleContainer: {
    width: "100%",
    padding: 20,
  },
});
