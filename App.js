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

export default function App() {
  // return <WelcomeScreen />;
  // return <LoginScreen />;
  // return <RegisterScreen />;
  // return <ListingProductsScreen />;
  return <CreatingProductScreen />;
  // return <ViewProductScreen />;
  // return <AccountScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
