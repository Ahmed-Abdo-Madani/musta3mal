import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import Colors from "../config/Colors";

const listings = [
  {
    id: 1,
    image: require("../assets/pd1.jpg"),
    title: "nice Appartment",
    price: 6000,
  },
  {
    id: 2,
    image: require("../assets/redJacket.jpg"),
    title: "Fabrege Egg",
    price: 999999,
  },
  {
    id: 3,
    image: require("../assets/pd1.jpg"),
    title: "nice Appartment",
    price: 6000,
  },
  {
    id: 4,
    image: require("../assets/redJacket.jpg"),
    title: "Fabrege Egg",
    price: 999999,
  },
  {
    id: 5,
    image: require("../assets/pd1.jpg"),
    title: "nice Appartment",
    price: 6000,
  },
  {
    id: 6,
    image: require("../assets/redJacket.jpg"),
    title: "Fabrege Egg",
    price: 999999,
  },
];
export default function ListingsScreen() {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subtitle={"$" + item.price}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
