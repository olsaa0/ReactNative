import React from "react";
import { Text, StyleSheet, View } from "react-native"
import Profile from "../components/profile";

const MainScreen =() => {
    return(
        <Profile/>
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
