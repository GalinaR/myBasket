import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Product({ title, price, image, store }) {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={image} />
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.price}>${price}</AppText>
      <AppText style={styles.store}>{store}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 7,
  },
  product: {
    borderRadius: 15,
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Product;
