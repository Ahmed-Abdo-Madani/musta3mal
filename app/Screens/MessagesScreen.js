import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListingItem from "../components/ListingItem";
import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Separator from "../components/Separator";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const deleteHandler = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => deleteHandler(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 45,
              title: "Fresh Sub",
              description: "description 45",
              image: require("../assets/watashi.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
