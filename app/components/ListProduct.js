import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function ListProduct({ title, price, image, IconComponent, store, onPress }) {
  return (
    <TouchableHighlight
      underlayColor={colors.light}
      onPress={onPress} // go to ViewProductScreen
    >
      <View style={styles.container}>
        {IconComponent}
        {image && (
          <Image
            style={styles.image}
            source={require("../assets/background.png")}
          />
        )}
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {price && <AppText style={styles.price}>{price}</AppText>}
        </View>
        <AppText style={styles.store}>{store}</AppText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,

    backgroundColor: colors.white,

    flexDirection: "row",
    paddingVertical: 5,
    // alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 5,
  },
  price: {
    color: colors.medium,
    fontWeight: "bold",
  },
  store: {
    marginRight: 10,
    alignSelf: "center",
    // justifyContent: "center",
    // fontWeight: "bold",
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 10,
    flex: 1,
  },
  // title: {
  //   fontSize: 20,
  // },
});

export default ListProduct;
