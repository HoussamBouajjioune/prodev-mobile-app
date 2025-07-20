import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const mockData = [
    { id: '1', name: 'React Native' },
    { id: '2', name: 'TypeScript' },
    { id: '3', name: 'Expo' },
    { id: '4', name: 'JavaScript' },
];

export default function SearchScreen() {
    const [query, setQuery] = useState('');
    const filteredData = mockData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                value={query}
                onChangeText={setQuery}
            />
            <FlatList
                data={filteredData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.name}</Text>
                )}
                ListEmptyComponent={<Text style={styles.empty}>No results found.</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    item: { padding: 8, fontSize: 16 },
    empty: { padding: 8, color: '#888' },
});