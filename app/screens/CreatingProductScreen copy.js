import React, { useState, useEffect } from "react";
import { StyleSheet, Button } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ImageInput from "../components/ImageInput";
import FormImagePicker from "../components/forms/FormImagePicker";
import ModalTester from "../components/ModalTester";
import AppSelectStoreList from "../components/AppSelectStoreList";

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
  const [createdStore, setCreatedStore] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    // const formData = new FormData();
    // console.log("product", formData, product);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => console.log("RESPONSE !!!", response))

      .catch((err) => {
        return err;
      });
  }, [product]);

  useEffect(() => {
    console.log("!!!! send store !!!!", createdStore);
    fetch("http://localhost:5000/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ store: createdStore }),
    })
      .then((response) => {
        console.log("response store", response);
        // setModalVisible(!isModalVisible);
      })

      .catch((err) => {
        return err;
      });
  }, [createdStore]);

  // React.useEffect(
  //   () =>
  //     //Get Values from database
  //     axios
  //       .get("http://localhost:5000/stores")
  //       .then((response) => {
  //         // Store Values in Temporary Array
  //         let newArray = response.data.map((item) => {
  //           return { key: item.store_id, value: item.store };
  //         });
  //         //Set Data Variable
  //         setData(newArray);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       }),
  //   []
  // );

  useEffect(() => {
    console.log("rendering dropDown", createdStore);
    fetch("http://localhost:5000/stores", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((response) => {
        console.log("rendering response store", response);
        // Store Values in Temporary Array
        const newArray = response.map((item) => {
          return { key: item.store_id, value: item.store };
        });
        //Set Data Variable
        setData(newArray);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }, []);

  const toggleModal = (value) => () => {
    setModalVisible(!isModalVisible);
    setCreatedStore(value);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ title: "", price: "", store: "", imageUri: "" }}
        onSubmit={(product, actions) => {
          console.log("AppForm", product, actions);
          setProduct(product);
        }} // {handleSubmit}
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
        {/* <AppFormField
          maxLength={100}
          autoCorrect={false}
          // data-store-id={1}
          name="store"
          placeholder="Store"
          width="50%" // if don't write width it will be default 100% (from AppTextInput and AppFormField)
        /> */}
        <AppSelectStoreList
          // setSelected={setSelected}
          data={data}
          // onSelect={() => handleChange(selected)}
        />
        {/* <SelectList
          setSelected={setSelected}
          data={data}
          onSelect={() => handleChange(selected)}
        /> */}
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
