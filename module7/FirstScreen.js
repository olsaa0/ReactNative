import React from "react";
import { View , Text, Button, StyleSheet} from "react-native";

const FirstScreen = (props) => {
    console.log(props);

    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.text}>First Screen</Text>
            <Button title="Go to the 2 Screen" onPress={() => {props.navigation.navigate("Second")}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center",
        alignItemms: "center",
        backgroundcolor: "lightblue"
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#333",
        padding: 10,
        textAlign: "center"
    }
});

export default FirstScreen;