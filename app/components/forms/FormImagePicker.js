import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInput from "../ImageInput";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUri = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUri, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
      {/* <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      /> */}
    </>
  );
}

export default FormImagePicker;
