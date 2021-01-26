import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";
import constants from "expo-constants";
import AppLoading from "expo-app-loading";

import AppText from "./app/components/AppText";

import Colors from "./app/config/Colors";
import AuthNavigation from "./app/navigation/AuthNavigation";
import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

import AuthContext from "./app/auth/context";
import AuthStorage from "./app/auth/storage";

export default function App() {
  const netInfo = useNetInfo();
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const secureStorageUser = async () => {
    const user = await AuthStorage.getUser();
    if (!user) return null;
    setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={secureStorageUser}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
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
