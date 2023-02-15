import React from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from "react-native";

import ListProduct from "../components/ListProduct";
import AppText from "../components/AppText";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import WelcomeScreen from "./WelcomeScreen";
import auth from "../firebase/firebase";
import { signOut } from "firebase/auth";

function AccountScreen(props) {
  // const handleLogOut = () => {
  //   signOut()
  //     .then(() => {
  //       navigation.reolace("LogIn");
  //     })
  //     .catch((error) => alert(error.message));
  // };

  return (
    <Screen style={styles.container}>
      <View style={styles.account}>
        {/* <AppText style={styles.name}>Galina</AppText> */}
        <AppText style={styles.email}>{auth.currentUser?.email}</AppText>
      </View>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate(routes.LOGOUT)}
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
