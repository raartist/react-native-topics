// 55 list header and footer - flatList

// rendering list optimized using usecallbacks

import { useCallback } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import pokemonList from "./data.json";

export default function App() {
  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.card}>
        <Text style={styles.cardText}>{item.type}</Text>
        <Text style={styles.cardText}>{item.name}</Text>
      </View>
    ),
    []
  );
  const keyExtractor = useCallback((item) => item.id.toString(), []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.scrollView}
        data={pokemonList}
        renderItem={renderItem}
        // horizontal
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
        ListEmptyComponent={
          <View style={styles.emptyList}>
            <Text>Ohh oo... No data available!</Text>
          </View>
        }
        ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
        ListFooterComponent={<Text style={styles.headerText}>End of list</Text>}
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
  emptyList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 12,
  },
});
