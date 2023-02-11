import React, { useState, useEffect } from "react";
import { StyleSheet, Button } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ImageInput from "../components/ImageInput";
import FormImagePicker from "../components/forms/FormImagePicker";
import ModalTester from "../components/ModalTester";

const validationSchema = Yup.object();
// .shape({
//   title: Yup.string().required().min(1).label("Title"),
//   price: Yup.number().required().min(1).max(10000).label("Price"),
//   store: Yup.string().required().min(1).label("Store"),
//   image: Yup.string().required().label("Images"),
// });

function CreatingProductScreen(props) {
  const [product, setProduct] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [store, setStore] = useState(""); // This is to manage TextInput State

  console.log("!!!! CreatingProductScreen !!!!", product, store);

  useEffect(() => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => console.log("response", response))

      .catch((err) => {
        return err;
      });
  }, [product]);

  useEffect(() => {
    console.log("!!!! send store !!!!", store);
    fetch("http://localhost:5000/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ store }),
    })
      .then((response) => {
        console.log("response store", response);
        // setModalVisible(!isModalVisible);
      })

      .catch((err) => {
        return err;
      });
  }, [store]);

  const toggleModal = (value) => () => {
    setModalVisible(!isModalVisible);
    console.log("saveStore", value, store);
    setStore(value);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ title: "", price: "", store: "", imageUri: "" }}
        onSubmit={(product) => setProduct(product)} // {handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker
          // imageUri={imageUri}
          // onChangeImage={(uri) => setFieldValue(uri)}
          name="imageUri"
        />
        {/* <ImageInput
          imageUri={imageUri}
          onChangeImage={(uri) => setImageUri(uri)}
          name="image"
        /> */}
        <AppFormField
          maxLength={100}
          autoCorrect={false}
          name="title"
          placeholder="Title"
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120} // if don't write width it will be default 100% (from AppTextInput and AppFormField)
        />
        <AppFormField
          maxLength={100}
          autoCorrect={false}
          // data-store-id={1}
          name="store"
          placeholder="Store"
          width="50%" // if don't write width it will be default 100% (from AppTextInput and AppFormField)
        />
        <SubmitButton title="Create" />
      </AppForm>
      <Button title="Create store" onPress={toggleModal()} />
      <ModalTester isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default CreatingProductScreen;
