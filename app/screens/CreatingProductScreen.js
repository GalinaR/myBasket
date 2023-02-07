import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ImageInput from "../components/ImageInput";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  store: Yup.string().required().min(1).label("Store"),
});

function CreatingProductScreen(props) {
  const [imageUri, setImageUri] = useState();

  return (
    <Screen style={styles.container}>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
      <AppForm
        initialValues={{ title: "", price: "", store: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
          name="store"
          placeholder="Store"
          width="50%" // if don't write width it will be default 100% (from AppTextInput and AppFormField)
        />
        <SubmitButton title="Create" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default CreatingProductScreen;
