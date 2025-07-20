import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Inbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inbox</Text>
            <Text>No messages yet.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
});

export default Inbox;