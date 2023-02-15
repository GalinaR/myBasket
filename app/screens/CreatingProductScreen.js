import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  useColorScheme,
} from "react-native";
import * as Yup from "yup";
import { SelectList } from "react-native-dropdown-select-list";

import colors from "../config/colors";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ImageInput from "../components/ImageInput";
import FormImagePicker from "../components/forms/FormImagePicker";
import ModalTester from "../components/ModalTester";
import AppButton from "../components/AppButton";

import AppSelectStoreList from "../components/AppSelectStoreList";
import defaultStyles from "../config/styles";
import { FirebaseError, initializeApp } from "firebase/app"; //validate user
import { getStorage, ref, uploadBytes } from "firebase/storage"; // access the storage database
import { uploadImage } from "../firebase/storage";
import { addProduct } from "../firebase/firestore";
import auth from "../firebase/firebase";

// import { useAuth } from "../firebase/auth";

const validationSchema = Yup.object();
// .shape({
//   title: Yup.string().required().min(1).label("Title"),
//   price: Yup.number().required().min(1).max(10000).label("Price"),
//   store: Yup.string().required().min(1).label("Store"),
//   image: Yup.string().required().label("Images"),
// });

function CreatingProductScreen(props) {
  // const { authUser } = useAuth();
  const [imageUri, setImage] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState(0);
  const [selectedStore, setStore] = useState(0);

  const [createdStore, setCreatedStore] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const data = [];
  // useEffect(() => {
  //   const formData = new FormData();
  //   console.log("product", formData, product);

  //   const uploadedFile = product?.files;
  //   console.log("data", data);
  //   // formData.append("qwer", uploadedFile);
  //   if (uploadedFile) {
  //     console.log("uploadedFile", uploadedFile, uploadedFile.fileName);
  //     formData.append("image", {
  //       uri: uploadedFile.uri,
  //       type: uploadedFile.type,
  //       fileName: uploadedFile.fileName,
  //     });
  //   }
  //   if (product) {
  //     formData.append("product", JSON.stringify(product));
  //   }

  //   fetch("http://localhost:5000/products", {
  //     method: "POST",
  //     headers: {
  //       // "Content-Type": "application/json",
  //       "Content-Type": "multipart/form-data",
  //     },
  //     body: formData,
  //   })
  //     .then((response) => console.log("response", response))

  //     .catch((err) => {
  //       return err;
  //     });
  // }, [product]);

  // useEffect(() => {
  //   console.log("!!!! send store !!!!", createdStore);
  //   fetch("http://localhost:5000/stores", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ store: createdStore }),
  //   })
  //     .then((response) => {
  //       console.log("response store", response);
  //       // setModalVisible(!isModalVisible);
  //     })

  //     .catch((err) => {
  //       return err;
  //     });
  // }, [createdStore]);

  // useEffect(() => {
  //   console.log("rendering dropDown", createdStore);
  //   fetch("http://localhost:5000/stores", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((data) => data.json())
  //     .then((response) => {
  //       console.log("rendering response store", response);
  //       // Store Values in Temporary Array
  //       const newArray = response.map((item) => {
  //         return { key: item.store_id, value: item.store };
  //       });
  //       //Set Data Variable
  //       setData(newArray);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return err;
  //     });
  // }, []);

  const toggleModal = (value) => () => {
    setModalVisible(!isModalVisible);
    setCreatedStore(value);
  };

  const setStateImage = (image) => {
    console.log("IMAGE", image);
    setImage(image?.uri);
  };

  const handleSubmitProduct = async () => {
    try {
      if (true) {
        console.log("handleSubmitProduct");

        const img = await fetch(imageUri);
        const bytesImg = await img.blob();
        console.log("bytesImg", bytesImg);
        const bucketImg = await uploadImage(bytesImg, "auth.currentUser?.uid");
        // checkUniqStore()
        // if true
        //   save to Firebase
        // else error MSG
        console.log("nameProduct", nameProduct);
        await addProduct(
          "auth.currentUser?.uid",
          nameProduct,
          priceProduct,
          selectedStore,
          bucketImg
        );
        console.log("FINISH");
        // saveMessagingDeviceToken(auth.currentUser?.uid);
      } else {
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Screen style={styles.container}>
      {/* <AppForm
        initialValues={{ title: "", price: "", store: "", imageUri: "" }}
        onSubmit={(product, actions) => {
          console.log("AppForm", product, actions);
          setProduct(product);
        }} // {handleSubmit}
        validationSchema={validationSchema}
      > */}
      <FormImagePicker
        // imageUri={imageUri}
        // onChangeImage={(uri) => setFieldValue(uri)}
        imageUri={imageUri}
        handleAdd={setStateImage}
        // name="imageUri"
      />
      {/* <ImageInput imageUri={imageUri} onChangeImage={uploadImage} /> */}
      {/* <AppFormField
          maxLength={100}
          autoCorrect={false}
          name="title"
          placeholder="Title"
        /> */}
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
      {/* <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120} // if don't write width it will be default 100% (from AppTextInput and AppFormField)
        /> */}
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
      {/* <AppSelectStoreList
          // setSelected={setSelected}
          data={data}
          // onSelect={() => handleChange(selected)}
        /> */}
      <SelectList
        setSelected={setStore}
        data={data}
        boxStyles={styles.inputField}
        inputStyles={[defaultStyles.text, { color: "#6e6969", borderWidth: 0 }]}
        dropdownStyles={{
          backgroundColor: defaultStyles.colors.light,
          borderWidth: 0,
        }}
        dropdownTextStyles={[defaultStyles.text, { color: "#6e6969" }]}
        placeholder="Select store"
        name="store_name"
        onSelect={() => {
          // console.log("onSelect", selected);
          setValues((values) => {
            console.log("setValues", values, data);

            return { ...values, store: data[selected - 1].value };
          });
        }}
      />

      <AppButton title="Create Product" onPress={handleSubmitProduct} />
      <Button title="Create store" onPress={toggleModal()} />
      {/* </AppForm> */}

      <ModalTester isModalVisible={isModalVisible} toggleModal={toggleModal} />
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
    // borderColor:
  },
});

export default CreatingProductScreen;
