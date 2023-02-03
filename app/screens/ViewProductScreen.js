import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Product from "../components/Product";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

function ViewProductScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.dark} size={35} />
      </View>
      <Product
        title="Lemon"
        price="2"
        image={require("../assets/lemon.jpeg")}
        store="Walmart"
      />
      <View style={styles.buttonsContainer}>
        <AppButton title="Add" />
        <AppButton title="Edit" color="secondary" />
        <AppButton title="Delete" color="red" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 30,
    // flexDirection: "row",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    right: 0,
    marginBottom: 40,
  },
  container: {
    padding: 20,
  },
});

export default ViewProductScreen;
