import react from "react";
import {View, Text, Stylesheet} from 'react-native'
import {MaterialcommunityIcons} from '@expo/vector-icons'

const Icon =()=> {

    return(
        <View style={styles.iconWrapper}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name={AnimatedProps.name} size={27} color={"lightblue"}/>
            </View>
            <Text style={styles.iconText}>{AnimatedProps.IconText}</text>


        </View>
    );
}

const styles = StyleSheet.create({
    iconWrapper:{
        backgroundColor:"#384053",
        width:"100%",
        height:"100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },
    iconConatiner:{
        alignItems: "center",
        width: 60,
        height: 60,
    },

    iconText:{
        height: 20,
        fontWeight: "600"
    }

});

export default Icon;
