import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Feather from "react-native-vector-icons/dist/Feather"
import SimpleLineIcons from "react-native-vector-icons/dist/SimpleLineIcons"
const SubHeader = () => {
  return (
    <LinearGradient colors={['#bbdae0', '#bde1d6', '#c3f1ee']}>
      <View style={styles.container}>
       <Feather name="map-pin" size={25} color="black"/>
       <Text style={styles.deliver} >Delive to Turkey -23456</Text>
       <SimpleLineIcons name ="arrow-down" size={20} />
      </View>
    </LinearGradient>
  )
}

export default SubHeader

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"center",
    padding:10,
  },
  deliver:{
    fontSize:15,
    paddingHorizontal:7,
    fontWeight:"600"
  }
})