import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function ListProduct({ title, price, image, store }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>${price}</AppText>
      </View>
      <AppText style={styles.store}>{store}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderRadius: 15,
    // widht: "100%",
    // height: 70,
    // backgroundColor: colors.white,
    // marginBottom: 20,
    // overflow: "hidden",
    flexDirection: "row",
    padding: 5,
  },
  image: {
    width: 70,
    height: 70,
  },
  price: {
    color: colors.medium,
    fontWeight: "bold",
  },
  store: {
    marginLeft: 20,
    alignSelf: "center",
    // justifyContent: "center",
    // fontWeight: "bold",
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  // title: {
  //   fontSize: 20,
  // },
});

export default ListProduct;
