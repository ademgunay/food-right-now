import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import useDetailResult from '../hooks/useDetailResult';

const SearchDetailScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, errMsg] = useDetailResult(id);

    if (!result) {
        return <Text>Error: {errMsg}</Text>
    }

    return (
        <View>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        width: 300,
        height: 200
    }
});

export default SearchDetailScreen;