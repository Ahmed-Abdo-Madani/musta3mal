import React from "react";
import * as yup from "yup";
import useLocation from "../hooks/useLocation";
import useApi from "../hooks/useApi";
import listingApi from "../api/listings";

import { StyleSheet } from "react-native";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
  AppFormImagePicker,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = yup.object().shape({
  images: yup.array().min(1, "Please Select at least one image."),
  title: yup.string().required().min(1).label("Title"),
  price: yup.number().required().min(1).max(90000).label("Price"),
  description: yup.string().label("Description"),
  category: yup.object().nullable().label("Category"),
});

const items = [
  { title: "office", value: "1" },
  { title: "home", value: "2" },
  { title: "weareable", value: "3" },
];

export default function ListingEditScreen() {
  const location = useLocation();
  const handleSupmit = async (listing) => {
    const result = await listingApi.addListings({ ...listing, location });
    if (!result.ok) return alert("Error saving Data to Server");
    alert("success");
  };

  return (
    <Screen style={styles.conatianer}>
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
