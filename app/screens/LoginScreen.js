import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import * as Yup from "yup";
import auth from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import colors from "../config/colors";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const initialValues = { email: "", password: "" };
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      {/* <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => ( */}
      <View style={[styles.container]}>
        {/* Icon will be optional. It will be rendered only if icon is defined. I use conditional rendering using {} and && */}
        <View style={[styles.containerLogin]}>
          {
            <MaterialCommunityIcons
              name={"email"}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          }
          <TextInput
            onChangeText={(text) => setEmail(text)}
            onBlur={(text) => setEmail(text)}
            style={defaultStyles.text}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            value={email}
            textContentType="emailAddress"
          />
        </View>
        <View style={[styles.containerLogin]}>
          {
            <MaterialCommunityIcons
              name={"lock"}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          }
          <TextInput
            onChangeText={(text) => setPassword(text)}
            onBlur={(text) => setPassword(text)}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            value={password}
          />
        </View>
        {/* <Button onPress={handleSubmit} title="Submit" /> */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors["primary"] }]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>{"Login"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors["secondary"] }]}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>{"Register"}</Text>
        </TouchableOpacity>
      </View>
      {/* )}
      </Formik> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  containerLogin: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default LoginScreen;
