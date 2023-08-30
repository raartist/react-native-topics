
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

/*/last property will take advantage of style in the styling array}*/

// 44 - platform specific code
// we already did this in last section where we added padding top for android in a different way with the help of 
// platform package from react-native
//because our safeAreaView was only working for ios devices.

// Flex:<positive number>
// flexGrow: '<positive number>', flexShrink:1, flexBasis:0

// box shadow like box shadow object can only be applicable for ios devices not on android
// to do box shadow on android devices we need to use android elevate api

export default function App() {

  
  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text} >welcome!</Text>
      </View>
    </View>
    </SafeAreaView>
  );
}

// const windowWidth = dimensions.get("window").width;
// const windowHeight = dimensions.get("window").height;


const styles = StyleSheet.create({
  safeContainer:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  container: {
    backgroundColor: "plum",
    flex: 1,
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 500 ? "60%" : "40%",
    // backgroundColor: "lightblue",
    padding:20,    
  },
  text: {
    // fontSize: windowWidth > 500 ? 28 : 24,
    fontWeight:"bold",
    textAlign:"center"
  },
});
