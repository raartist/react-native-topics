// 54 List empty component - flatList

import { Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
// import pokemonList from "./data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        style={styles.scrollView}
        data={[]}
        renderItem={function ({ item }) {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          );
        }}
        // horizontal
        keyExtractor={(item, index) => item.id.toString()}
        ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
        ListEmptyComponent={<View style={styles.emptyList}><Text>Ohh oo... No data available!</Text></View>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    gap: 4,
  },
  cardText: {
    fontSize: 30,
  },
  emptyList:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    height: Dimensions.get("window").height
  }
});
