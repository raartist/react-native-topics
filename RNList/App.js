// 51 rendering lists in react native - but not with a recommended approach

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import pokemonList from "./data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          );
        })}
      </ScrollView>
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
  card:{
    padding:8,
    borderRadius:8,
    borderWidth:1,
    marginBottom:16,
    flex:1,
    gap:4
  },
  cardText:{
    fontSize:30
  }
});
