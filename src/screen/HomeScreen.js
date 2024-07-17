import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Careousel, Header, Services, SubHeader, Category , Deals} from '../components'

const HomeScreen = () => {
  return (

    <ScrollView>
      <Header />
      <SubHeader />
      <Category />
      <Careousel />
      <Services />
      <Deals/>
    </ScrollView>

  )
}

export default HomeScreen

const styles = StyleSheet.create({})