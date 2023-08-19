import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

/*/last property will take advantage of style in the styling array}*/

// 36 - Flex-Shrink

// box shadow like box shadow object can only be applicable for ios devices not on android
// to do box shadow on android devices we need to use android elevate api

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={[{ backgroundColor: "#8e9b00", flexShrink: 1 }, styles.box]}>Box 1 shrink</Box>
      <Box style={[{ backgroundColor: "#b65d1f", flexShrink: 2 }, styles.box]}>Box 2 shrink</Box>
      {/* <Box style={[{ backgroundColor: "#1c4c56" }, styles.box]}>Box 3</Box>
      <Box style={[{ backgroundColor: "#ab9156" }, styles.box]}>Box 4</Box>
      <Box style={[{ backgroundColor: "#6b0803" }, styles.box]}>Box 5</Box>
      <Box style={[{ backgroundColor: "#1c4c56" }, styles.box]}>Box 6</Box>
      <Box style={[{ backgroundColor: "#8e9b00" }, styles.box]}>Box 7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    height: 300,
    borderWidth: 6,
    borderColor: "pink",
    flexWrap: "nowrap",
    width: 300,
    justifyContent: "flex-start",
    flexDirection: "row",
    columnGap: 20,
    rowGap: 12,
    gap: 23,
  },
  box: {
    width: 200,
    height: 50,
  },
});
