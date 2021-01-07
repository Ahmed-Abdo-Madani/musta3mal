import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListingItem from "../components/ListingItem";
import Screen from "../components/Screen";
import Separator from "../components/Separator";

const messages = [
  {
    id: 1,
    title: "title 1",
    description: "description 1",
    image: require("../assets/watashi.jpg"),
  },
  {
    id: 2,
    title: "title 2",
    description: "description 2",
    image: require("../assets/watashi.jpg"),
  },
  {
    id: 3,
    title: "title 3",
    description: "description 3",
    image: require("../assets/watashi.jpg"),
  },
];
export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <ListingItem
            image={item.image}
            title={item.title}
            subtitle={item.description}
            onPress={() => console.log(`Message Selected: ${item.title}`)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
