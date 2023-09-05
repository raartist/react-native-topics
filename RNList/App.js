// 52 rendering lists in react native - with recommended 'flatlist' approach

import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import pokemonList from "./data.json";

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.scrollView}
        data={pokemonList}
        renderItem={function({item}){
          return(
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          )
        }}
        // horizontal
        keyExtractor={(item, index)=>item.id.toString()}
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
    marginBottom: 16,
    flex: 1,
    gap: 4,
  },
  cardText: {
    fontSize: 30,
  },
});
