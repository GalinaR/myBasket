import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItemSeparator from "../components/ListItemSeparator";
import ListProduct from "../components/ListProduct";
import Screen from "../components/Screen";
import colors from "../config/colors";
import NewProductButton from "../navigation/NewProductButton";

const products = [
  {
    id: 1,
    title: "Lemon",
    price: 2,
    store: "Walmart",
    image: require("../assets/lemon.jpeg"),
  },
  {
    id: 2,
    title: "Pistachios",
    price: 16.99,
    store: "Costco",
    image: require("../assets/pistachios.jpeg"),
  },
  {
    id: 3,
    title: "Greek Spanakopita",
    price: 4.49,
    store: "Trader Joe's",
    image: require("../assets/spanakopita.jpeg"),
  },
];

function ListingProductsScreen(props) {
  const { navigation } = props;
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={(products) => products.id.toString()}
        renderItem={({ item }) => (
          <ListProduct
            title={item.title}
            price={"$" + item.price}
            store={item.store}
            image={item.image}
            onPress={() => {
              navigation.navigate("ProductDetails", item);
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <NewProductButton
        onPress={() => {
          return navigation.navigate("CreateProduct");
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingProductsScreen;
