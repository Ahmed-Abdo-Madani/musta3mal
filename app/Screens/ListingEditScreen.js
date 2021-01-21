import React, { useState } from "react";
import * as yup from "yup";
import { StyleSheet } from "react-native";

import useLocation from "../hooks/useLocation";
import listingApi from "../api/listings";

import Screen from "../components/Screen";
import UploadProgressBar from "../components/UploadProgressBar";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
  AppFormImagePicker,
} from "../components/forms";

const validationSchema = yup.object().shape({
  images: yup.array().min(1, "Please Select at least one image."),
  title: yup.string().required().min(1).label("Title"),
  price: yup.number().required().min(1).max(90000).label("Price"),
  description: yup.string().label("Description"),
  category: yup.object().required().nullable().label("Category"),
});

const items = [
  { title: "office", value: "1" },
  { title: "home", value: "2" },
  { title: "weareable", value: "3" },
];

export default function ListingEditScreen() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const location = useLocation();
  const handleSupmit = async (listing) => {
    setUploadProgress(0);
    setUploadVisible(true);
    const result = await listingApi.addListings(
      { ...listing, location },
      (onUploadProgress) => setUploadProgress(onUploadProgress)
    );
    if (!result.ok) {
      setUploadVisible(false);
      return alert("Error saving Data to Server");
    }
  };

  return (
    <Screen style={styles.conatianer}>
      <UploadProgressBar
        progress={uploadProgress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />

      <AppForm
        initialValues={{
          images: [],
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={handleSupmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <AppFormField
          name="title"
          maxLenght={255}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Title"
        />
        <AppFormField
          name="price"
          autoCapitalize="none"
          maxLenght={8}
          autoCorrect={false}
          keyboardType="numeric"
          placeholder="Price"
        />
        <AppFormPicker name="category" placeholder="Category" items={items} />
        <AppFormField
          name="description"
          multiline
          numberOfLines={3}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Description"
          secureTextEntry
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  conatianer: {
    paddingHorizontal: 10,
  },
});
