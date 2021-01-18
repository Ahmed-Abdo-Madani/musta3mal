import React from "react";
import * as yup from "yup";
import { StyleSheet } from "react-native";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = yup.object().shape({
  userName: yup.string().required().min(5).max(21).label("UserName"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(7).label("Password"),
});

export default function RegisterScreen() {
  return (
    <Screen style={styles.conatianer}>
      <AppForm
        initialValues={{ userName: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="userName"
          autoCapitalize="none"
          autoCorrect={false}
          icon={{ name: "account" }}
          textContentType="username"
          placeholder="User Name"
        />
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon={{ name: "email" }}
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCorrect={false}
          autoCapitalize="none"
          icon={{ name: "lock" }}
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  conatianer: {
    paddingHorizontal: 10,
  },
});
