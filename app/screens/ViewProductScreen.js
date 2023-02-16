import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Product from "../components/Product";
import Screen from "../components/Screen";
import { deleteProduct } from "../firebase/firestore";
import routes from "../navigation/routes";

function ViewProductScreen(props) {
  const { route, navigation } = props;
  const product = route.params;

  const handleDeleteProduct = () => {
    console.log("ViewProductScreen - handleDeleteProduct", product);
    deleteProduct(product.id);
    navigation.navigate(routes.LISTING_PRODUCTS);
  };

  return (
    <Screen style={styles.container}>
      {/* <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.dark} size={35} />
      </View> */}
      <Product
        title={product.title}
        price={product.price}
        image={product.image}
        store={product.store}
      />
      <View style={styles.buttonsContainer}>
        <AppButton title="Buy" />
        <AppButton
          title="Edit"
          color="secondary"
          onPress={() => navigation.navigate(routes.PRODUCT_EDIT, { product })}
        />
        <AppButton title="Delete" color="red" onPress={handleDeleteProduct} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 10,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    right: 0,
    marginBottom: 40,
  },
  container: {
    padding: 20,
  },
});

export default ViewProductScreen;
