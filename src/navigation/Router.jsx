import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screen/HomeScreen'
import ProductScreen from '../screen/ProductScreen'

const Stack = createStackNavigator()
const Router = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{
        headerShown: false
    }}
    >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />
  </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})