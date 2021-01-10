import React from "react";
import { StyleSheet } from "react-native";

import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import ProductsScreen from "./app/Screens/ProductsScreen";
import ProductDetailsScreen from "./app/Screens/ProductDetailsScreen";
import MessagesScreen from "./app/Screens/MessagesScreen";
import AccountScreen from "./app/Screens/AccountScreen";
import LoginScreen from "./app/Screens/LoginScreen";
import ListingsScreen from "./app/Screens/ListingsScreen";

import AppIcon from "./app/components/AppIcon";
import ListingItem from "./app/components/ListingItem";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  constainer: {
    padding: 20,
  },
});
