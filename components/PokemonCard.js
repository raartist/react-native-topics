import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

const PokemonCard = ({ name, image, type, hp, moves, weeknesses }) => {
  return (
    <View style={styles.card}>
      <View style={styles.namePar}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️ HP: {hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <Text style={styles.type}>🔥 {type}</Text>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.moves}>Moves: {moves.join(", ")}</Text>
      </View>
      <View style={styles.weeknessContainer}>
        <Text style={styles.weekness}>Weekness: {weeknesses.join(", ")}</Text>
      </View>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  namePar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: 800,
  },
  hp: {
    fontSize: 14,
    fontWeight: 600,
  },
  image: {
    marginVertical: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: 200,
    height: 200,
  },
  typeContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  type:{
    borderColor:"red",
    borderWidth:2,
    borderRadius:10,
    fontSize:18,
    fontWeight:600,
    paddingVertical:5,
    paddingHorizontal:10
  },
  moves:{
    fontSize:18,
    fontWeight:600,
    paddingVertical:8
  },
  weekness:{
    fontSize:18,
    fontWeight:600
  }
});
