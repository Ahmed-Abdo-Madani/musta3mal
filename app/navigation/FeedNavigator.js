import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../Screens/ListingsScreen";
import ProductDetails from "../Screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigatior = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      name="Listing Details"
      component={ProductDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigatior;
