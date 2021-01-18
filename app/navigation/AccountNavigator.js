import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../Screens/MessagesScreen";
import AccountScreen from "../Screens/AccountScreen";

const Stack = createStackNavigator();

const AccountNavigatior = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigatior;
