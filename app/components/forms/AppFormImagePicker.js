import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import AppErrorMessage from "./AppErrorMessage";

const AppFormImagePicker = ({ name }) => {
  const { setFieldValue, values, touched, errors } = useFormikContext();

  const imageUris = values[name];
  const onAddImage = (uri) => {
    setFieldValue(name, [...(imageUris || []), uri]);
  };

  const onRemoveImage = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={onAddImage}
        onRemoveImage={onRemoveImage}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormImagePicker;
