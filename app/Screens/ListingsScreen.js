import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import useApi from "../hooks/useApi";
import ListingsApi from "../api/listings";

import Card from "../components/Card";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import Colors from "../config/Colors";

export default function ListingsScreen({ navigation }) {
  const { data, request, loading, error } = useApi(ListingsApi.getListings);
  useEffect(() => {
    request();
  }, []);

  return (
    <Screen style={styles.container}>
      {error && (
        <>
          <AppText text="Sorry connection error try again.!" />
          <AppButton title="Retry" onPress={request} />
        </>
      )}
      <ActivityIndicator visable={loading} />
      <FlatList
        data={data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.images[0].url}
            title={item.title}
            subtitle={"$" + item.price}
            onPress={() => navigation.navigate("Listing Details", item)}
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
