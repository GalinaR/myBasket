import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";

import defaultStyles from "../config/styles";
import Screen from "./Screen";

export default function AddStoreModal({
  isModalVisible,
  handleModalOnPress,
  errorMessage,
  setErrorMessage,
}) {
  const [value, setValue] = useState("");
  return (
    <Screen style={styles.screen}>
      <Modal
        isVisible={isModalVisible}
        onRequestClose={() => {
          console.log("AddStoreModal CLOSE");
        }}
      >
        <View style={styles.modalView}>
          <TextInput
            placeholder="Enter store name..."
            value={value}
            style={[defaultStyles.text, styles.textInput]}
            onChangeText={(value) => {
              setErrorMessage("");
              setValue(value);
            }}
          />
          {errorMessage ? (
            <Text style={styles.error}>{errorMessage}</Text>
          ) : (
            <Text></Text>
          )}

          <Button title="Add store" onPress={() => handleModalOnPress(value)} />
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  modalView: {
    // alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: 180,
    width: "100%",
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 25,
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "80%",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: defaultStyles.colors.medium,
    borderWidth: 1,
    marginBottom: 10,
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
});
