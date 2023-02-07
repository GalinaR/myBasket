import CreatingProductScreen from "./app/screens/CreatingProductScreen";
import ListingProductsScreen from "./app/screens/ListingProductsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ViewProductScreen from "./app/screens/ViewProductScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import AppText from "./app/components/AppText";
import ListProduct from "./app/components/ListProduct";
import AccountScreen from "./app/screens/AccountScreen";
// import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";

import { Button, Image } from "react-native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  // return <WelcomeScreen />;
  // return <LoginScreen />;
  // return <RegisterScreen />;
  // return <ListingProductsScreen />;
  // return <CreatingProductScreen />;
  // return <ViewProductScreen />;
  // return <AccountScreen />;
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );

  // const [imageUri, setImageUri] = useState();

  // const requestPermission = async () => {
  //   // const result = await Permissions.askAsync(Permissions.CAMERA);
  //   const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (!granted) alert("You need to enable permission to access the library.");
  // };
  // useEffect(() => {
  //   requestPermission();
  // }, []);
  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if (!result.canceled) setImageUri(result.assets[0].uri);
  //   } catch (error) {
  //     console.log("Error reading an image", error);
  //   }
  // };
  //   return (
  //     <Screen>
  //       {/* <Button title="Select Image" onPress={selectImage} />
  //       <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
  //       <ImageInput
  //         imageUri={imageUri}
  //         onChangeImage={(uri) => setImageUri(uri)}
  //       />
  //     </Screen>
  //   );
}
