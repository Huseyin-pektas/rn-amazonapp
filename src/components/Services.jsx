import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AmozonPay from "../assets/amazon-pay.png"
import SendMoney from "../assets/send-money.jpg"
import ScanQR from "../assets/scan-qr.jpeg"
import PayBills from "../assets/pay-bills.jpeg"
import { RecentSearchData } from '../data/RecentSearchData'   
import { ServicesCart } from '../components'

const Services = () => {
  return (
    <ScrollView horizontal 
    showsHorizontalScrollIndicator={false}
    style={styles.container}>
      <View style={styles.ServiveContainer}>
        <View style={styles.row} >
          <View style={styles.innerContainer} >
            <Image
            style={styles.imgStyle}
            source={AmozonPay}/>
            <Text style={styles.text}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer} >
            <Image
            style={styles.imgStyle}
            source={SendMoney}/>
            <Text style={styles.text}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row} >
          <View style={styles.innerContainer} >
            <Image
            style={styles.imgStyle}
            source={ScanQR}/>
            <Text style={styles.text}>ScanQR</Text>
          </View>
          <View style={styles.innerContainer} >
            <Image
            style={styles.imgStyle}
            source={PayBills}/>
            <Text style={styles.text}>PayBills</Text>
          </View>
        </View>
      </View>
      {
        RecentSearchData.map(item =>(
         <ServicesCart  key={item.id} item ={item}/>
        ))
      }
    </ScrollView>
  )
}

export default Services

const styles = StyleSheet.create({
  container:{
paddingHorizontal:10,
  },
  ServiveContainer:{
    borderRadius:5,
    backgroundColor:"white"
  },
  row:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
  },
  innerContainer:{
    paddingTop:10,
    alignItems:"center"
    ,padding:5
  },
  imgStyle:{
    width:50,
    height:50,
    borderRadius:25
  },
  text:{
fontSize:10,
fontWeight:"bold",
color:"black"
  },
  
})