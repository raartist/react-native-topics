import { StyleSheet, Text, View } from "react-native";

//Styling in React -- css not allowed can be styled with the help of javascript properties like camelCase propeties e.g. backgroundColor instead backgroud-color

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  title: {},
});
