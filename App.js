import { StyleSheet, Text, View } from "react-native";

/*/last property will take advantage of style in the styling array}*/

// BOX - model
export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.lightblue, styles.box]}>
        <Text style={{borderRadius:5,backgroundColor:'red'}}>Lightblue box</Text>
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
    //padding and margin
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    //border
    borderWidth: 2,
    borderColor: "purple",
    backgroundColor: "pink",
    //borderRadius - only applies to android when applied on Textcomponent , however View component supports in both platforms
    borderRadius:5
  },
  lightblue: {
    backgroundColor: "lightblue",
  },
  lightgreen: {
    backgroundColor: "lightgreen",
  },
});
