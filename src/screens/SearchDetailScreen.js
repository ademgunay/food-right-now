import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const SearchDetailScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const [errMsg, setErrMsg] = useState('');
    const id = navigation.getParam('id');
    console.log(id);

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            console.log(response.data);
            setResult(response.data);
        } catch (e) {
            setErrMsg(e.message);
            console.log(e);
        }
    };

    useEffect(() => { getResult(id) }, []);

    if (!result) {
        return <Text>Error</Text>
    }

    return (
        <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{result.name}</Text>
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
    image: {
        width: 300,
        height: 200
    }
});

export default SearchDetailScreen;