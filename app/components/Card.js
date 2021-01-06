import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "./AppText";
import Colors from "../config/Colors";

function Card({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.titleContainer}>
        <AppText style={styles.title} text={title} />
        <AppText style={styles.price} color="secondary" text={subtitle} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  titleContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontWeight: "normal",
  },
});

export default Card;
