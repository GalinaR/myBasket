import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../___OLD_COMPONENTS/LoginScreen";
import RegisterScreen from "../___OLD_COMPONENTS/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ListingProductsScreen from "../screens/ListingProductsScreen";
import CreatingProductScreen from "../screens/CreatingProductScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
