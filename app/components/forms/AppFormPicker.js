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
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
