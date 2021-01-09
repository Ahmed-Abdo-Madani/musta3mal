import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Colors from "../config/Colors";
import AppText from "./AppText";

export default function ListingItem({
  image,
  ImageComponent,
  title,
  subtitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.lightGray} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.titleContainer}>
            <AppText style={styles.title} text={title} />
            {subtitle && (
              <AppText
                text={subtitle}
                color="textSecondary"
                fontWeight="normal"
                textTransform="lowercase"
              />
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 13,
    backgroundColor: Colors.white,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  titleContainer: {
    paddingLeft: 10,
    justifyContent: "center",
  },
  title: {
    marginBottom: 5,
  },
});
