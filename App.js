import { StatusBar } from "expo-status-bar";
import { View, Image, Text, Switch } from "react-native";
import AppButton from "./app/components/AppButton";
import ListingProductsScreen from "./app/screens/ListingProductsScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import { useState } from "react";
import RegisterScreen from "./app/screens/RegisterScreen";
import CreatingProductScreen from "./app/screens/CreatingProductScreen";

export default function App() {
  // return <WelcomeScreen />;
  return <CreatingProductScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
