import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import Colors from "../config/Colors";
import ListingItem from "../components/ListingItem";

export default function ProductDetails({ route }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.titleContainer}>
        <AppText text={listing.title} />
        <AppText text={`$${listing.price}`} color="secondary" />
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
