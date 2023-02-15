import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ListingProductsScreen from "../screens/ListingProductsScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="LogIn" component={ListingProductsScreen} />
    {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
  </Stack.Navigator>
);

export default AuthNavigator;
