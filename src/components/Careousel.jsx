import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { CarouselData } from '../data/CaresoulData'

const Careousel = () => {
    return (
        <View style={styles.carouselContainer}>
            <Swiper style={styles.wrapper}
                autoplay={true}
                showsHorizontalScrollIndicator={false}
                showsPagination={false}
                showsButtons={false}>
                {
                    CarouselData.map((item, i) => (
                        <View key={i}>
                            <Image
                                resizeMode="stretch" 
                                source={item.image}
                                style={styles.İmgStyle} />
                        </View>
                    ))}
            </Swiper>
        </View>
    )
}

export default Careousel

const styles = StyleSheet.create({
    carouselContainer: {
        position: "relative",
        marginBottom:0

    },
    wrapper: {
        height:250
    },
    İmgStyle: {
        width: "100%",
        height: 250
    }
})
