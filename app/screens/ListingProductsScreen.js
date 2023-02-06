import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ListItemSeparator from "../components/ListItemSeparator";
import ListProduct from "../components/ListProduct";
import Screen from "../components/Screen";

const products = [
  {
    id: 1,
    title: "Lemon",
    price: "2",
    store: "Walmart",
    image: require("../assets/lemon.jpeg"),
  },
  {
    id: 2,
    title: "Pistachios",
    price: "16.99",
    store: "Costco",
    image: require("../assets/pistachios.jpeg"),
  },
  {
    id: 3,
    title: "Greek Spanakopita",
    price: "4.49",
    store: "Trader Joe's",
    image: require("../assets/spanakopita.jpeg"),
  },
];

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
      <FlatList
        data={products}
        keyExtractor={(products) => products.id.toString()}
        renderItem={({ item }) => (
          <ListProduct
            title={item.title}
            price={item.price}
            store={item.store}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
      {/* <ListProduct
        title="Lemon"
        price="2"
        image={require("../assets/lemon.jpeg")}
        store="Walmart"
      /> */}
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
