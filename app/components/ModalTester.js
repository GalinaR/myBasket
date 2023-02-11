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
// import colors from "../config/colors";
import Screen from "./Screen";

function ModalTester(props) {
  console.log("ModalTester");
  const { isModalVisible, toggleModal } = props;
  const [value, setValue] = useState(""); // This is to manage TextInput State
  return (
    <Screen style={styles.screen}>
      <Modal
        // presentationStyle="formSheet"
        isVisible={isModalVisible}
      >
        {/* <View style={styles.viewWrapper}> */}
        <View style={styles.modalView}>
          <TextInput
            placeholder="Enter store name..."
            value={value}
            style={[defaultStyles.text, styles.textInput]}
            onChangeText={(value) => setValue(value)}
          />

          {/* <View style={{ flex: 1 }}>
          <Text>Hello!</Text> */}

          <Button title="Add store" onPress={toggleModal(value)} />
          {/* </View> */}
        </View>
        {/* </View> */}
      </Modal>
      {/* </View> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  modalView: {
    // alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    // top: "50%",
    // left: "50%",
    // elevation: 5,
    // transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
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
});

export default ModalTester;
