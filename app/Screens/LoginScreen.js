import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppErrorMessage from "../components/AppErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.conatianer}>
      <Image style={styles.logo} source={require("../assets/muslogo.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              icon={{ name: "email" }}
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              icon={{ name: "lock" }}
              placeholder="Password"
              secureTextEntry
            />
            <AppErrorMessage
              error={errors.password}
              visible={touched.password}
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
