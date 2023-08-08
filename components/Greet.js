import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Greet = ({name}) => {
  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  )
}

export default Greet

const styles = StyleSheet.create({})