import React, { useState, useEffect } from "react";
import { StyleSheet, Button, TextInput, View, Image } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import Screen from "../components/Screen";
import useAuth from "../context/useContext";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";

import { getProducts, updateProduct, getStores } from "../firebase/firestore";

import routes from "../navigation/routes";

function EditProductScreen({ navigation, route }) {
  const { product } = route.params;
  const { user: authenticatedUser } = useAuth();

  const [imageUri, setImage] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState(0);
  const [selectedStore, selectStore] = useState({});
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getStores(authenticatedUser?.auth?.currentUser.uid, setStores);
    setImage(product.imageUri);
    setNameProduct(product.title);
    setPriceProduct(product.price);
  }, []);

  useEffect(() => {
    const currentStore = stores.find((store) => store.value === product.store);
    console.log("currentStore", stores, currentStore);
    selectStore(currentStore);
  }, [stores]);

  const isProductUniq = (products, product) =>
    products.filter(
      ({ uid, title, price, store }) =>
        uid === product.uid &&
        title === product.title &&
        price === product.price &&
        store === product.store
    ).length === 0;

  const handleConfirmEditProduct = async () => {
    console.log("BEGIN handleConfirmEditProduct", "store = ", selectedStore);
    try {
      if (authenticatedUser) {
        getProducts(authenticatedUser?.auth?.currentUser.uid, setProducts);
        const isUniq = isProductUniq(products, {
          uid: authenticatedUser?.auth?.currentUser.uid,
          title: nameProduct,
          price: priceProduct,
          store: selectedStore.value,
        });

        console.log(
          "UPDATE handleConfirmEditProduct",
          product,
          product.id,
          authenticatedUser?.auth?.currentUser.uid,
          nameProduct,
          priceProduct,
          selectedStore.store_name,
          product.originalImageURL
        );

        if (isUniq) {
          await updateProduct(
            product.id,
            authenticatedUser?.auth?.currentUser.uid,
            nameProduct,
            priceProduct,
            selectedStore.store_name,
            product.originalImageURL
          );

          navigation.navigate(routes.LISTING_PRODUCTS);

          console.log("ADD PRODUCT");
        } else {
          alert("Dublicate product");
        }
      } else {
        alert("Login please");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={imageUri} />

      <View style={styles.inputField}>
        <TextInput
          onChangeText={(value) => {
            console.log("value", value);
            setNameProduct(value);
          }}
          autoCorrect={false}
          maxLength={100}
          name="title"
          placeholder="Title"
          style={[defaultStyles.text]}
          value={nameProduct}
        />
      </View>

      <View style={[styles.inputField]}>
        <TextInput
          onChangeText={setPriceProduct}
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          style={[defaultStyles.text]}
          value={priceProduct}
        />
      </View>

      <SelectList
        setSelected={(storeID) => {
          const store = stores.find(({ key }) => key == storeID);
          selectStore(store);
        }}
        data={stores}
        boxStyles={styles.inputField}
        defaultOption={selectedStore}
        inputStyles={[defaultStyles.text, { color: "#6e6969", borderWidth: 0 }]}
        dropdownStyles={{
          backgroundColor: defaultStyles.colors.light,
          borderWidth: 0,
        }}
        dropdownTextStyles={[defaultStyles.text, { color: "#6e6969" }]}
        placeholder="Select store"
        name="store_name"
      />
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Confirm Edit"
          color="secondary"
          onPress={handleConfirmEditProduct}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputField: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    width: "100%",
  },
  buttonsContainer: {
    marginTop: 10,
  },
  image: {
    width: "70%",
    height: 270,
  },
});

export default EditProductScreen;
