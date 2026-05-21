import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const students = [
    { name: 'Kiki', surname: 'Kiki', age: '26', birthday: '01/01/2000' },
    { name: 'Olsa', surname: 'Pireva', age: '16', birthday: '13/01/2010' },
    { name: 'Xhuno', surname: 'Kika', age: '6', birthday: '26/12/2019' },
    { name: 'Rita', surname: 'Shala', age: '16', birthday: '19/01/2010' },
];

const Challenge = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>List of People</Text>
            <Text style={styles.subTextStyle}>*~~*~~*~~*~~*</Text>
            
            <FlatList
                // 1. Removed horizontal={true} to make it vertical
                // 2. Changed showsHorizontalScrollIndicator to showsVerticalScrollIndicator
                showsVerticalScrollIndicator={false} 
                keyExtractor={(student) => student.name}
                data={students}
                // 3. Changed width to height for vertical spacing between cards
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                renderItem={({ item }) => (
                    // 4. Removed the fixed width constraint so cards stretch fully
                    <View style={styles.tableContainer}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCellLeft}>
                                <Text style={styles.studentName}>
                                    {item.name} {item.surname}
                                </Text>
                            </View>
                            <View style={styles.tableCellRight}>
                                <View style={styles.badge}>
                                    <Text style={styles.studentGrade}>age: {item.age}</Text>
                                </View>
                            </View>
                        </View>
                        
                        <View style={{ paddingHorizontal: 20, paddingBottom: 16, paddingTop: 8 }}>
                            <Text style={{ fontSize: 13, color: '#be2e52' }}>
                                Birthday: {item.birthday}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({   
    container: {
        flex: 1, // Added flex 1 to allow the vertical list to scroll properly
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffafaf',
    },
    textStyle: {
        fontSize: 24,
        fontWeight: '700', 
        color: '#1a1a1a', 
        marginBottom: 4,
    },
    subTextStyle: {
        fontSize: 14,
        color: '#b93c6c', 
        marginBottom: 24,
    },
    tableContainer: {
        // Removed width: 260 so cards span across the screen nicely
        backgroundColor: '#ffffff', 
        borderRadius: 16, 
        paddingVertical: 8,
        shadowColor: '#ffb6c1', 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 4, 
    },
    tableRow: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f7', 
    },
    tableCellLeft: {
        flex: 2, 
        justifyContent: 'center',
    },
    tableCellRight: {
        flex: 1, 
        alignItems: 'flex-end', 
    },
    badge: {
        backgroundColor: '#ffe4e1', 
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20, 
    },
    studentName: {
        color: '#ee707a', 
        fontSize: 16,
        fontWeight: '600', 
    },
    studentGrade: {
        color: '#d0417e', 
        fontSize: 14,
        fontWeight: '700',
    },
});

export default Challenge;
