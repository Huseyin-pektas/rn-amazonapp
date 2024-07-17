import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import AntDesign from "react-native-vector-icons/dist/AntDesign"
import Feather from "react-native-vector-icons/dist/Feather"


const Header = () => {
    return (
        <View>
            <LinearGradient style={styles.container}
                colors={['#88dae0', '#98e1d6', '#9ee4d4']}>
                <View style={styles.InputBox}>
                    <View style={styles.IconTextinput}>
                        <Ionicons name="search" size={25}  color ="black"/>
                        <TextInput placeholder='Search to Amazon'
                            placeholderTextColor={"gray"}
                            style={styles.Textinput}
                        />
                    </View>
                    <AntDesign name="scan1" size={25} />
                </View>
                <Feather name="mic" size={25} />
            </LinearGradient>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10
    },
    InputBox: {
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        backgroundColor: "white",
        justifyContent: "space-between",
        borderWidth:1,
        borderColor:"#a1bcc0",
        borderRadius:5,
        paddingHorizontal:10

    },
    IconTextinput: {
        flexDirection: "row",
        alignItems: "center"
    },
    Textinput: {

padding:8
    }
})