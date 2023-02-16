import React from "react";
import ImageInput from "./ImageInput";

function FormImagePicker({ name, imageUri, handleAdd }) {
  return (
    <>
      <ImageInput imageUri={imageUri} onChangeImage={handleAdd} />
    </>
  );
}

export default FormImagePicker;
