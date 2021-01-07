import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";

export default function ListingItem({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.titleContainer}>
        <AppText style={styles.title} text={title} />
        <AppText
          text={subtitle}
          color="textSecondary"
          fontWeight="normal"
          textTransform="lowerCase"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
