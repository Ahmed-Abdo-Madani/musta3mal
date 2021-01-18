import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "./AppText";
import Colors from "../config/Colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ imageUrl, title, subtitle, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.titleContainer}>
          <AppText style={styles.title} text={title} />
          <AppText style={styles.price} color="secondary" text={subtitle} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 15,
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
