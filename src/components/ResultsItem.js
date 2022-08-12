import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ResultsItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image_url }} style={styles.imageStyle} />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.row}>
                <Entypo name='phone' size={18} />
                <Text style={styles.phone}>{item.phone}</Text>
            </View>
            <View style={styles.row}>
                <AntDesign name="star" size={18} color="black" />
                <Text style={styles.rating}>{item.rating} Stars, {item.review_count} Reviews</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 12
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 4
    },
    phone: {
        marginLeft: 4,
        marginVertical: 4,
    },
    rating: {
        marginLeft: 4
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 4
    }
});

export default ResultsItem;