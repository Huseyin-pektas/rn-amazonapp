import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/components/Header'

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor={"#9ee4d4"} barStyle={"dark-content"}/>
      <Header/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})