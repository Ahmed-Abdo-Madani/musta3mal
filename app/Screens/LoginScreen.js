import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppErrorMessage,
} from "../components/forms";
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import AuthStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  const [loadingFailed, setLoadingFailed] = useState(false);
  const authContext = useContext(AuthContext);

  const handelSubmit = async ({ email, password }) => {
    const response = await authApi.login(email, password);
    if (!response.ok) return setLoadingFailed(true);
    setLoadingFailed(false);
    const user = jwtDecode(response.data);
    authContext.setUser(user);
    AuthStorage.storeToken(response.data);
  };

  return (
    <Screen style={styles.conatianer}>
      <Image style={styles.logo} source={require("../assets/muslogo.png")} />
      <AppErrorMessage
        error="Wring Email or Password"
        visible={loadingFailed}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handelSubmit}
        validationSchema={validationSchema}
      >
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
          autoCapitalize="none"
          autoCorrect={false}
          icon={{ name: "lock" }}
          placeholder="Password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  conatianer: {
    paddingHorizontal: 10,
  },
  logo: {
    width: 130,
    height: 100,
    marginTop: 50,
    marginBottom: 25,
    alignSelf: "center",
  },
});
