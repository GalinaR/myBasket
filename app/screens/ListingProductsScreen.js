import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListProduct from "../components/ListProduct";
import Screen from "../components/Screen";

function ListingProductsScreen(props) {
  return (
    // <View>
    //   <Image style={styles.image} source={require("../assets/lemon.jpeg")} />
    //   <View style={styles.detailsContainer}>
    //     <AppText style={styles.title}>Lemon</AppText>
    //     <AppText style={styles.price}>$2</AppText>
    //   </View>
    // </View>
    <Screen style={styles.container}>
      <ListProduct
        title="Lemon"
        price="2"
        image={require("../assets/lemon.jpeg")}
        store="Walmart"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  // detailsContainer: {
  //   padding: 20,
  // },
  // image: {
  //   width: "100%",
  //   height: 300,
  // },
  // price: {
  //   color: colors.secondary,
  //   fontWeight: "bold",
  //   fontSize: 20,
  //   marginVertical: 10,
  // },
  // title: {
  //   fontSize: 24,
  //   fontWeight: "500",
  // },
});

export default ListingProductsScreen;
