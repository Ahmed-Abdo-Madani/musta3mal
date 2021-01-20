import React from "react";
import { useFormikContext } from "formik";

import AppErrorMessage from "./AppErrorMessage";
import AppPicker from ".././AppPicker";

export default function AppFormPicker({ name, placeholder, items }) {
  const { setFieldValue, values, touched, errors } = useFormikContext();

  return (
    <>
      <AppPicker
        icon={{ name: "apps" }}
        items={items}
        name={name}
        selectedItem={values[name]}
        onSelectItem={(item) => {
          setFieldValue(name, item);
        }}
        placeholder={placeholder}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
