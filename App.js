
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

/*/last property will take advantage of style in the styling array}*/

// 42 - useWindowDimensions

// (Dimensions API drawbacks) it will failed to meet our dimension conditions when screen is rotated | thus we need to reload our app to recalculate the dimensions.
// for resolving this issue we are using useState and useEffect hooks.
// although this issue can also be solved with useWindowDimensions Api from react-native.. without using any hook
// Flex:<positive number>
// flexGrow: '<positive number>', flexShrink:1, flexBasis:0

// box shadow like box shadow object can only be applicable for ios devices not on android
// to do box shadow on android devices we need to use android elevate api

export default function App() {
  const windowWidth = useWindowDimensions.width;
  const windowHeight = useWindowDimensions.height;
  
  return (
    <View style={styles.container}>
      <View style={[styles.box,{width: windowWidth > 500 ? "70%" : "90%",
     height: windowHeight > 500 ? "60%" : "40%",}]}>
        <Text style={{fontSize: windowWidth > 500 ? 50 : 24}}>Dynamic ui</Text>
      </View>
    </View>
  );
}

// const windowWidth = dimensions.get("window").width;
// const windowHeight = dimensions.get("window").height;


const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    backgroundColor: "plum",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 500 ? "60%" : "40%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // fontSize: windowWidth > 500 ? 28 : 24,
  },
});
