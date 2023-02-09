import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Product from "../components/Product";
import Screen from "../components/Screen";

function ViewProductScreen(props) {
  const { route, navigation } = props;
  const listing = route.params;

  return (
    <Screen style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.dark} size={35} />
      </View>
      <Product
        title={listing.title}
        price={listing.price}
        image={listing.image}
        store={listing.store}
      />
      <View style={styles.buttonsContainer}>
        <AppButton title="Buy" />
        <AppButton title="Edit" color="secondary" />
        <AppButton title="Delete" color="red" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 10,
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
