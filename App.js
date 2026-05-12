import React from "react";
import { Text, StyleSheet, View } from "react-native";
import {Navigationconatiner} from '@react-navigation-native';
import {createStackNavigator} from 'react-navigation/stack';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" compnent={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});