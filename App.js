import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Greet from "./components/Greet";
const logoImg = require("./assets/adaptive-icon.png");

//Reusable components

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={[styles.container]}>
     <Greet name="Bruce Wayne"/>
     <Greet name="Michael Jordan"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
