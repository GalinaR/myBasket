import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import AppText from "../components/AppText";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import useAuth from "../context/useContext";

function AccountScreen(props) {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        logOut();
      })
      .catch((error) => alert(error.message));
  };

  const userEmail = user?.auth?.currentUser.email;

  return (
    <Screen style={styles.container}>
      <View style={styles.account}>
        <AppText style={styles.email}>{userEmail}</AppText>
      </View>
      <TouchableWithoutFeedback onPress={handleLogOut}>
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
