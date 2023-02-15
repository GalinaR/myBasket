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
import AppSelectStoreList from "../components/AppSelectStoreList";
import defaultStyles from "../config/styles";
import { uploadImage } from "../firebase/storage";
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
  const [product, setProduct] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [createdStore, setCreatedStore] = useState("");
  const [selected, setSelected] = useState(); // Select a Store
  const [values, setValues] = useState();

  const [data, setData] = useState([]);

  useEffect(() => {
    const formData = new FormData();
    console.log("product", formData, product);

    const uploadedFile = product?.files;
    console.log("data", data);
    // formData.append("qwer", uploadedFile);
    if (uploadedFile) {
      console.log("uploadedFile", uploadedFile, uploadedFile.fileName);
      formData.append("image", {
        uri: uploadedFile.uri,
        type: uploadedFile.type,
        fileName: uploadedFile.fileName,
      });
    }
    if (product) {
      formData.append("product", JSON.stringify(product));
    }

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    })
      .then((response) => console.log("response", response))

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

  // Store product information to Storage and Firestore
  // const handleSubmit = async () => {
  //   setIsSubmitting(true);

  //   try {
  //     await uploadImage(product.file, authUser.uid);
  //     props.onSuccess(RECE)
  //   }
  // }

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
        {/* <AppFormField
          maxLength={100}
          autoCorrect={false}
          name="title"
          placeholder="Title"
        /> */}
        <View style={styles.inputField}>
          <TextInput
            // onChangeText={(email) => {
            //   console.log("email", email);
            //   setEmail(email);
            // }}
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
            // onChangeText={(email) => {
            //   console.log("email", email);
            //   setEmail(email);
            // }}
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
          setSelected={setSelected}
          data={data}
          boxStyles={styles.inputField}
          inputStyles={[
            defaultStyles.text,
            { color: "#6e6969", borderWidth: 0 },
          ]}
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
        <SubmitButton title="Create" onClick={console.log("handleSubmit")} />
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
