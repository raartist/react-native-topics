
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

/*/last property will take advantage of style in the styling array}*/

// 43 - SafeAreaView
//safe area view doesn't work in all the android devices that's why we need to do some jugad with the help of platform.os tool
// and apply padding top for android devices only.. because safeArea view works fine for ios devices

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
