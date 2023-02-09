import React from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from "react-native";

import ListProduct from "../components/ListProduct";
import Icon from "../components/Icon";
import AppText from "../components/AppText";

import Screen from "../components/Screen";
import WelcomeScreen from "./WelcomeScreen";

function AccountScreen(props) {
  console.log("AccountScreen", props);
  return (
    <Screen style={styles.container}>
      <View style={styles.account}>
        <AppText style={styles.name}>Galina</AppText>
        <AppText style={styles.email}>galina.sergarz@gmail.com</AppText>
      </View>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate("LogOut")}
      >
        <View style={styles.logout}>
          <Icon
            name="logout"
            size={70}
            backgroundColor="red"
            iconColor="white"
          />
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  account: {
    paddingBottom: 50,
  },
  container: {
    padding: 20,
  },
  logout: {
    alignItems: "center",
  },
});

export default AccountScreen;
