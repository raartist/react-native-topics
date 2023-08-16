import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

/*/last property will take advantage of style in the styling array}*/

// 32 - Flex-flexWrap

// box shadow like box shadow object can only be applicable for ios devices not on android
// to do box shadow on android devices we need to use android elevate api

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f"}}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56"}}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156"}}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803"}}>Box 5</Box> 
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    height:300,
    borderWidth: 6,
    borderColor: "pink",
    flexWrap:"wrap",
    flexDirection:"row",
    flex:1
  },
});
