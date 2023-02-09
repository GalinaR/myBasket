import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Create a shopping list easily</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("LogIn")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
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
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: colors.secondary,
  },
});

export default WelcomeScreen;
