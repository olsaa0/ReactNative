import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Profile = () => {
    <View>
        <Text style={styles.text}>Student Screen</Text>
        <PersonDetails name="John Doe" image={require('../assets/person.png')} description="Student at Digital School"/>
        
    </View>
}

const styles=StyleSheet.create({
text: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
}

});

export default Profile;