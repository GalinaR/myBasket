import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInput from "../ImageInput";

function FormImagePicker({ name, imageUri, handleAdd }) {
  // const { errors, setFieldValue, touched, values } = useFormikContext();
  // const imageUri = values[name]?.uri;

  // const handleAdd = (uri) => {
  //   setFieldValue(name, uri);
  //   // setFieldValue("files", uri);
  // };

  // const handleRemove = (uri) => {
  //   setFieldValue(
  //     name,
  //     imageUri.filter((imageUri) => imageUri !== uri)
  //   );
  // };

  return (
    <>
      <ImageInput imageUri={imageUri} onChangeImage={handleAdd} />
      {/* <ErrorMessage error={errors[name]} visible={touched[name]} /> */}
      {/* <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      /> */}
    </>
  );
}

export default FormImagePicker;
