import React from "react";
import {View, Text, FlatList, Stylesheet} from 'react-native';
import data from '../assets/data.json';

const Animals = () => {
    return (
        <View>
            <Text>FlatList</Text>
            <FlatList
            data={data}
            renderItem={({item}) => {
                return(
                    <View>
                        <Text>{item.animal}</Text>
                        <Text>{item.group}</Text>
                    </View>
                );
            }}/>
        </View>
    );
}
export default Animals;
