import { StyleSheet, Text, View } from "react-native";

/*/last property will take advantage of style in the styling array}*/

// 39- Dynamic user interfaces

// Flex:<positive number>
// flexGrow: '<positive number>', flexShrink:1, flexBasis:0

// box shadow like box shadow object can only be applicable for ios devices not on android
// to do box shadow on android devices we need to use android elevate api

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Dynamic ui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    backgroundColor:"plum",
    height:"100%"
  },
});
