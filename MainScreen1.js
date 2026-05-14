import React from "react";
import { Text, StyleSheet} from "react-native"

const MainScreen =() => {
    return <Text style={styles.textStyle}>Hello World</Text>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default MainScreen;