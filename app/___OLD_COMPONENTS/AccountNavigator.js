import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ListingProductsScreen from "../screens/ListingProductsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LogOut" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
