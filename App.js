import React, { useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";

import constants from "expo-constants";

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
import AppText from "./app/components/AppText";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import Colors from "./app/config/Colors";
import AuthNavigation from "./app/navigation/AuthNavigation";
import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

import AuthContext from "./app/auth/context";

export default function App() {
  const netInfo = useNetInfo();
  const [user, setUser] = useState();

  const secureStorageUser = async () => {
    const token = await AuthStorage.getToken();
    if (!token) return null;
    setUser(jwtDecode(token));
  };
  useEffect(() => {
    secureStorageUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {netInfo.isInternetReachable === false && (
        <View style={styles.noNet}>
          <AppText text="No Internet Connection" color="primary" />
        </View>
      )}
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
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
  noNet: {
    width: "100%",
    alignItems: "center",
    paddingTop: constants.statusBarHeight,
    paddingVertical: 7,
    backgroundColor: Colors.meduimGray,
  },
});
