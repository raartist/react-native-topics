import { useState } from "react";
import { ActivityIndicator, Alert, Button, Modal, StyleSheet, Text, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={[styles.container]}>
      <Button onPress={() => setOpenModal(true)} style={{ padding: "20px" }} title="open modal" />
      <Modal
        visible={openModal}
        onRequestClose={() => setOpenModal(false)}
        animationType="fade"
        presentationStyle="pageSheet"
      >
        <View style={{ backgroundColor: "plum" }}>
          <Text>Hello this is modal content</Text>
          <ActivityIndicator />
          <ActivityIndicator size={"large"} color="red" />
          <Button onPress={() => setOpenModal(false)} title="close modal" />
        </View>
      </Modal>

      <Button title="open Alert" onPress={() => Alert.alert("Invalid String!")} />
      <Button
        title="open Alert2"
        onPress={() => Alert.alert("Invalid String!", "These kind of strings are not allowed!")}
      />
      <Button
        title="open Alert3"
        onPress={() =>
          Alert.alert("Invalid String!", "These kind of strings are not allowed!", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed!") },
            { text: "Ok", onPress: () => console.log("Ok Pressed!") },
            { text: "Reset", onPress: () => console.log("Reset Pressed!") },
          ])
        }
      />
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
