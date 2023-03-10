import React, { useState, useEffect } from "react";
import { StyleSheet, Button, TextInput, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import Screen from "../components/Screen";
import FormImagePicker from "../components/FormImagePicker";
import AddStoreModal from "../components/AddStoreModal";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";
import { uploadImage } from "../firebase/storage";
import {
  addProduct,
  getProducts,
  addStore,
  getStores,
} from "../firebase/firestore";

import useAuth from "../context/useContext";

import routes from "../navigation/routes";

function CreatingProductScreen({ navigation }) {
  const { user } = useAuth();

  const [imageUri, setImage] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState(0);
  const [selectedStore, selectStore] = useState({});
  const [products, setProducts] = useState([]);

  const [stores, setStores] = useState([]);

  const [isModalVisible, setModalVisible] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getStores(user?.auth?.currentUser.uid, setStores);
  }, []);

  const checkUniqStore = (stores, value) =>
    stores.filter(({ store_name }) => store_name === value);

  const handleSubmitStore = (value) => {
    try {
      if (value) {
        if (checkUniqStore(stores, value).length === 0) {
          addStore(user?.auth?.currentUser.uid, value);
          setModalVisible(false);
        } else {
          setErrorMessage("Dublicate store");
        }
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const setStateImage = (image) => {
    setImage(image?.uri);
  };

  const isProductUniq = (products, product) =>
    products.filter(
      ({ uid, title, price, store }) =>
        uid === product.uid &&
        title === product.title &&
        price === product.price &&
        store === product.store
    ).length === 0;

  const handleSubmitProduct = async () => {
    console.log("BEGIN handleSubmitProduct", "store = ", selectedStore);
    try {
      if (user) {
        getProducts(user?.auth?.currentUser.uid, setProducts);
        const isUniq = isProductUniq(products, {
          uid: user?.auth?.currentUser.uid,
          title: nameProduct,
          price: priceProduct,
          store: selectedStore.value,
        });

        if (isUniq) {
          const img = await fetch(imageUri);
          const bytesImg = await img.blob();
          const bucketImg = await uploadImage(
            bytesImg,
            user?.auth?.currentUser.uid
          );
          await addProduct(
            user?.auth?.currentUser.uid,
            nameProduct,
            priceProduct,
            selectedStore.value,
            bucketImg
          );

          navigation.navigate(routes.LISTING_PRODUCTS);
        } else {
          alert("Dublicate product");
        }
      } else {
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Screen style={styles.container}>
      <FormImagePicker
        imageUri={imageUri}
        handleAdd={setStateImage}
        // name="imageUri"
      />

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
          // value={email}
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
          // value={email}
        />
      </View>

      <SelectList
        setSelected={(storeID) => {
          const store = stores.find(({ key }) => key == storeID);
          selectStore(store);
        }}
        data={stores}
        boxStyles={styles.inputField}
        inputStyles={[defaultStyles.text, { color: "#6e6969", borderWidth: 0 }]}
        dropdownStyles={{
          backgroundColor: defaultStyles.colors.light,
          borderWidth: 0,
        }}
        dropdownTextStyles={[defaultStyles.text, { color: "#6e6969" }]}
        placeholder="Select store"
        name="store_name"
      />

      <AppButton title="Create Product" onPress={handleSubmitProduct} />
      <Button
        title="Create store"
        onPress={() => {
          setModalVisible(true);
          setErrorMessage("");
        }}
      />

      <AddStoreModal
        isModalVisible={isModalVisible}
        handleModalOnPress={handleSubmitStore}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
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
});

export default CreatingProductScreen;
