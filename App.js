import React, { useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import ProductsScreen from "./app/Screens/ProductsScreen";
import ProductDetailsScreen from "./app/Screens/ProductDetailsScreen";
import MessagesScreen from "./app/Screens/MessagesScreen";
import AccountScreen from "./app/Screens/AccountScreen";
import LoginScreen from "./app/Screens/LoginScreen";
import ListingsScreen from "./app/Screens/ListingsScreen";
import ListingEditScreen from "./app/Screens/ListingEditScreen";
import RegisterScreen from "./app/Screens/RegisterScreen";

import AppIcon from "./app/components/AppIcon";
import ImageInputList from "./app/components/ImageInputList";
import ListingItem from "./app/components/ListingItem";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import Colors from "./app/config/Colors";
import AuthNavigation from "./app/navigation/AuthNavigation";
import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

export default function App() {
  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator
      initialRouteName="list"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="list" component={ListingEditScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: Colors.primary,
        activeTintColor: Colors.white,
        inactiveBackgroundColor: Colors.lightGray,
        inactiveTintColor: Colors.darkGray,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  constainer: {
    padding: 10,
    flexDirection: "row",
  },
  addBtn: {
    width: 100,

    height: 100,
    borderRadius: 15,
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
    width: 100,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 15,
  },
});
