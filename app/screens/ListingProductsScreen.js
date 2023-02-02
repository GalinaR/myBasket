import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

function ListingProductsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/lemon.jpeg")} />
      <View style={styles.detailsContainer}>
        <Text>Lemon</Text>
        <Text>$2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
});

export default ListingProductsScreen;
