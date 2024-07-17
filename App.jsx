import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/components/Header'
import HomeScreen from './src/screen/HomeScreen'
import Router from './src/navigation/Router'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#9ee4d4"} barStyle={"dark-content"}/>
      <Router/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})