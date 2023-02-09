import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingProductsScreen from "../screens/ListingProductsScreen";
import ViewProductScreen from "../screens/ViewProductScreen";
import CreatingProductScreen from "../screens/CreatingProductScreen";

const Stack = createStackNavigator();

const ListingProductsNavigator = () => (
  <Stack.Navigator presentation="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingProductsScreen} />
    <Stack.Screen name="ProductDetails" component={ViewProductScreen} />
    <Stack.Screen name="CreateProduct" component={CreatingProductScreen} />
  </Stack.Navigator>
);

export default ListingProductsNavigator;
