import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";
import ListingItem from "../components/ListingItem";
import Separator from "../components/Separator";
import Colors from "../config/Colors";
import AppIcon from "../components/AppIcon";

const menuItems = [
  {
    title: "My Listings",

    icon: {
      name: "format-list-bulleted",
      backgroundColor: Colors.primary,
    },
  },
  {
    title: "My messages",

    icon: {
      name: "email",
      backgroundColor: Colors.secondary,
    },
    targetScreen: "Messages",
  },
];

export default function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListingItem
          title="Watashi Des"
          image={require("../assets/watashi.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <ListingItem
              title={item.title}
              ImageComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <View>
        <ListingItem
          title="log out"
          ImageComponent={<AppIcon name="logout" backgroundColor="#8C8C8C" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.lightGray,
  },
  container: {
    marginVertical: 20,
  },
});
