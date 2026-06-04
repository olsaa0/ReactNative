import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StudentDetails from "../components.StudentDetails";

const StudentScreen = () => {
    <View>
        <Text style={styles.text}>Student Screen</Text>
        <StudentDetails name="Olsa" image={require('../assets.student.jpg')} description="Student at Digital School"/>
        <StudentDetails name="Kiki" image={require('../assets.student.jpg')} description="Student at Digital School"/>
        <StudentDetails name="Xhuno" image={require('../assets.student.jpg')} description="Student at Digital School"/>
    </View>
}
const styles=StyleSheet.create({
text: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
}

});

export default StudentScreen;