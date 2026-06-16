import React from "react";
import {View, Text, FlatList, Stylesheet} from 'react-native';
import data from '../assets/data.json';

const Countries = () => {
    return (
        <View>
            <Text>FlatList</Text>
            <FlatList
            data={data}
            renderItem={({item}) => {
                return(
                    <View>
                        <Text>{item.country}</Text>
                        <Text>{item.capital}</Text>
                    </View>
                );
            }}/>
        </View>
    );
}
export default Countries;
