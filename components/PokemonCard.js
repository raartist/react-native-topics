import React, { useEffect, useRef } from "react";
import { Animated, Image, Platform, StyleSheet, Text, View } from "react-native";

const PokemonCard = ({ name, image, type, hp, moves, weaknesses }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };
  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
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
        <Text style={[styles.type, { borderColor }]}>
          {emoji} {type}
        </Text>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.moves}>Moves: {moves?.join(", ")}</Text>
      </View>
      <View style={styles.weeknessContainer}>
        <Text style={styles.weekness}>Weekness: {weaknesses?.join(", ")}</Text>
      </View>
    </Animated.View>
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
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
    fontWeight: 600,
  },
  image: {
    marginVertical: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: 200,
    height: 200,
  },
  typeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  type: {
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 600,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  moves: {
    fontSize: 22,
    fontWeight: 600,
    paddingVertical: 8,
  },
  weekness: {
    fontSize: 22,
    fontWeight: 600,
  },
});
