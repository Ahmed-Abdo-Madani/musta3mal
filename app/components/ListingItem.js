import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Colors from "../config/Colors";
import AppText from "./AppText";

export default function ListingItem({ image, title, subtitle, onPress }) {
  return (
    <TouchableHighlight underlayColor={Colors.lightGray} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.titleContainer}>
          <AppText style={styles.title} text={title} />
          <AppText
            text={subtitle}
            color="textSecondary"
            fontWeight="normal"
            textTransform="lowercase"
          />
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  titleContainer: {
    padding: 13,
  },
  title: {
    marginBottom: 5,
  },
});
