import React from 'react'
import { Platform, SafeAreaView, StyleSheet, Text } from 'react-native'
import PokemonCard from './components/PokemonCard'

//45 - exercise 1 - creating pokemon cards

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>App</Text>
      <PokemonCard/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    marginTop: Platform.OS === "android"?30:0
  },
})
export default App
