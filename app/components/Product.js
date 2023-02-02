import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import colors from "../config/colors";

function Product({ title, price, image }) {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text>{title}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  product: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
});

export default Product;
