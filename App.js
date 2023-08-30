import React from "react";
import { Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import PokemonCard from "./components/PokemonCard";

//47 - exercise 1 - creating pokemon cards (3/6)

const App = () => {
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weeknesses: ["Water", "Rock"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...charmanderData} />
        <PokemonCard {...charmanderData} />
        <PokemonCard {...charmanderData} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});
export default App;
