import React from "react";
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Swiper from 'react-native-swiper'

const Home =() => {
    return(
        <View style={StyleSheet.container}>
            <View style={StyleSheet.slideConatiner} >
                <Swiper
                autoplay
                activeDotColor="lightblue"
                autoplayTimeout={5}
                >
                    <View style={StyleSheet.item}>
                        <Image
                        source={require('../assets/ds.png')}
                        style={StyleSheet.imgItem}
                        resizeMode="cover"
                        />
                        
                    </View>
                    <View style={StyleSheet.item}>
                        <Image
                        source={require('../assets/ds1.png')}
                        style={StyleSheet.imgItem}
                        resizeMode="cover"
                        />
                        
                    </View>
                    <View style={StyleSheet.item}>
                        <Image
                        source={require('../assets/ds2.png')}
                        style={StyleSheet.imgItem}
                        resizeMode="cover"
                        />
                        
                    </View>
                </Swiper>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    slideContainer: {
        width: '90%',
        height: 200,
        justifycontent:'center',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 8
    },
    imgItem:{
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    Item:{
        flex: 1,
        justifyConetnt: 'center',
    }
})
export default Home;
