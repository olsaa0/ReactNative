import React from "react";
import { Text, StyleSheet, View } from "react-native"

const MainScreen =() => {
    return(
        <view>
            <Text>This is the main screen</Text>
        </view>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 30
    }
});
export default MainScreen;