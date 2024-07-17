import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Recomend from "../assets/recommend.jpg"

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomended deal for you </Text>
      <Image style={styles.ImgStyle} source={Recomend} />
      <View style={styles.buttonSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.text1}>% 18 off</Text>
          </TouchableOpacity>
          <Text style={styles.text2}> Deal</Text>
        </View>
      </View>
    </View>
  )
}

export default Deals

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10
  },

  ImgStyle: {
    width: "100%",
    height: 250
  },
  buttonSection: {
    paddingHorizontal: 10,
    marginTop:10
  },
  row: {
    flexDirection: "row",
    alignItems:"center"
  },
  touch: {

  },
  text1: {
    backgroundColor: "red",
    color: "white",
    padding: 5,
    fontSize: 14
  },
  text2: {
    fontSize:14,
    color: "red"
  }
})