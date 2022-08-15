import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsItem from './ResultsItem';

const ResultsList = ({ title, items, navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={items}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SearchDetail', { id: item.id })}
                        >
                            <ResultsItem item={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 12
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 12,
        marginBottom: 8
    }
});

export default withNavigation(ResultsList);