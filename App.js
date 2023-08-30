import React from 'react'
import { Platform, SafeAreaView, StyleSheet } from 'react-native'
import PokemonCard from './components/PokemonCard'

//46 - exercise 1 - creating pokemon cards (2/6)

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
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
