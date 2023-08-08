import { StyleSheet, Text, View } from "react-native";

//Styling in React -- css not allowed can be styled with the help of javascript properties like camelCase propeties e.g. backgroundColor instead backgroud-color
/*/last property will take advantage of style in the styling array}*/
export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.lightblue, styles.box]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreen]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    backgroundColor:'pink'
  },
  lightblue: {
    backgroundColor: "lightblue",
  },
  lightgreen: {
    backgroundColor: "lightgreen",
  },
});
