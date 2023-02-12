import React, { useState, useEffect } from "react";

import { StyleSheet, FlatList } from "react-native";

import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import ListProduct from "../components/ListProduct";
import NewProductButton from "../navigation/NewProductButton";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

// const products = [
//   {
//     id: 1,
//     title: "Lemon",
//     price: 2,
//     store: "Walmart",
//     image: require("../assets/lemon.jpeg"),
//   },
//   {
//     id: 2,
//     title: "Pistachios",
//     price: 16.99,
//     store: "Costco",
//     image: require("../assets/pistachios.jpeg"),
//   },
//   {
//     id: 3,
//     title: "Greek Spanakopita",
//     price: 4.49,
//     store: "Trader Joe's",
//     image: require("../assets/spanakopita.jpeg"),
//   },
// ];

function ListingProductsScreen(props) {
  const { navigation } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("LOAD PRODUCTS");
    fetch("http://localhost:5000/products")
      .then((data) => data.json())
      .then((data2) => {
        const convertedData = data2.map((product) => {
          return {
            id: product.product_id,
            title: product.title,
            price: product.price,
            store: product.store,
            image: require("../assets/spanakopita.jpeg"), //product.image, //require(`../assets/${product.image}`),
          };
        });
        setProducts(convertedData);
      })
      .catch((err) => {
        return err;
      });
  }, []);

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
              navigation.navigate(routes.PRODUCT_DETAILS, item);
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <NewProductButton
        onPress={() => {
          return navigation.navigate(routes.CREATE_PRODUCT);
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
