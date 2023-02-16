import React, { useState } from "react";
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import useAuth from "../context/useContext";

import defaultStyles from "../config/styles";

function WelcomeScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        authContext.logIn(user);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        authContext.logIn(user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Create a shopping list easily</Text>

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
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(email) => {
              console.log("email", email);
              setEmail(email);
            }}
            style={defaultStyles.text}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            // value={email}
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
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(password) => setPassword(password)}
            style={defaultStyles.text}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            // value={password}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: defaultStyles.colors.primary },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>{"Login"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: defaultStyles.colors.secondary },
          ]}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>{"Register"}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    width: "90%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: defaultStyles.colors.secondary,
    paddingBottom: 70,
  },

  // container: {
  //   padding: 10,
  // },
  containerLogin: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    width: "100%",
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
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  buttonText: {
    color: defaultStyles.colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
