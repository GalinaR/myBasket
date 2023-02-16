import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import ListProduct from "../components/ListProduct";
import NewProductButton from "../components/NewProductButton";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import { auth } from "../firebase/firebase";

import { getProducts } from "../firebase/firestore";

import useAuth from "../context/useContext";

function ListingProductsScreen(props) {
  console.log("ListingProductsScreen", routes, auth);
  const { user } = useAuth();
  const { navigation } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(" useEffect - ListingProductsScreen");
    if (!user) return;
    getProducts(user?.auth?.currentUser.uid, setProducts);
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
            image={item.imageURL}
            id={item.id}
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
