import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Category from '../components/Category'
import Careousel from '../components/Careousel'

const HomeScreen = () => {
  return (
   
      <ScrollView>

     <Header/>
     <SubHeader/>
     <Category/>
     <Careousel/>
      </ScrollView>
   
  )
}

export default HomeScreen

const styles = StyleSheet.create({})