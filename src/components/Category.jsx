import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Categories } from '../data/Categories'
import { useNavigation } from '@react-navigation/native'

const Category = () => {
    const navigation = useNavigation()
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator 
         style={styles.container}>
           {
            Categories.map((item)=>(
                <TouchableOpacity
                onPress={()=>navigation.navigate("Product")}
                 key={item.id}
                  style={styles.Touch}>
                <Image style={styles.İmgStyle}
                  source={item.image}/>
                <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
            ))
           }
            
        </ScrollView>
    )
}

export default Category

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    Touch:{

    },
    İmgStyle:{
        width:70,
        height:70
    },
    text:{
        color:"gray",
        textAlign:"center"
    }
})