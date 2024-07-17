import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ServicesCart = ({item}) => {
    return (
        <View
            style={styles.AutoContainer} >
            <Text style={styles.RecentText}>{item.title}</Text>
            <Image style={styles.serviceImg}
                source={item.image} />
        </View>
    )
}

export default ServicesCart

const styles = StyleSheet.create({
    AutoContainer:{
        backgroundColor:"white",
        width:140,
        marginLeft:8,
        borderRadius:5,
        padding:5
      },
      RecentText:{
        fontSize:15,
        marginBottom:8,
        color:"black"
      },
      serviceImg:{
        width:"100%",
        height:130
      }
})