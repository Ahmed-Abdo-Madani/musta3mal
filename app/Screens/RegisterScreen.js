import React, { useState } from "react";
import * as yup from "yup";
import { StyleSheet } from "react-native";

import {
  AppErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import auth from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = yup.object().shape({
  userName: yup.string().required().min(5).max(21).label("UserName"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(7).label("Password"),
});

export default function RegisterScreen() {
  const { login } = useAuth();
  const [registerFaild, setRegisterFailed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
    const response = await auth.register(userInfo);
    if (!response.ok) {
      setRegisterFailed(true);
      setError(response.data);
      return;
    }

    console.log("Register success " + response.data);
    /*   const loginResponse = await authApi.login(
      userInfo.email,
      userInfo.password
    );
    if (!loginResponse.ok) return;
    login(loginResponse.data); */
  };
  return (
    <Screen style={styles.conatianer}>
      <AppErrorMessage error="Register Failed" visible={registerFaild} />
      <AppForm
        initialValues={{ userName: "", email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
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
