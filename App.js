import { StyleSheet, Text, View } from "react-native";

/*/last property will take advantage of style in the styling array}*/

// Style - Inheritance

// box shadow like box shadow object can only be applicable for ios devices not on android
// to do box shadow on android devices we need to use android elevate api

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Inheritance Text <Text style={styles.boldText}> Next text</Text>
        </Text>
      </View>
      <View style={[styles.lightblue, styles.box, styles.boxshadow, styles.androidElevate]}>
        <Text style={{ borderRadius: 5, backgroundColor: "red" }}>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreen, styles.boxshadow, styles.androidElevate]}>
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
    width: 250,
    height: 250,
    //padding and margin
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    //border
    borderWidth: 2,
    borderColor: "purple",
    backgroundColor: "pink",
    //borderRadius - only applies to android when applied on Textcomponent , however View component supports in both platforms
    borderRadius: 5,
  },
  lightblue: {
    backgroundColor: "lightblue",
  },
  lightgreen: {
    backgroundColor: "lightgreen",
  },
  boxshadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    borderRadius: 4,
  },
  androidElevate: {
    elevation: 10,
    shadowColor: "red",
  },
  darkMode:{
    backgroundColor:"black",
    color:"white",  //this color is not inherited in the children of view which is text
  },
  darkModeText:{
    color:"white"
  },
  boldText:{
    fontWeight:"bold"
  }
});
