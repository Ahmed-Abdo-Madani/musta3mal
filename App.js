import React from "react";
import { StyleSheet, View } from "react-native";

import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import ProductsScreen from "./app/Screens/ProductsScreen";
import ProductDetailsScreen from "./app/Screens/ProductDetailsScreen";

export default function App() {
  return <ProductDetailsScreen />;
}

const styles = StyleSheet.create({
  constainer: {
    padding: 20,
  },
});
