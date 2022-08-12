import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput placeholder='Search'
                style={styles.inputStyle}
                value={term}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 12,
        backgroundColor: '#F0EEEE',
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 12,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 32,
        alignSelf: 'center',
        marginHorizontal: 12,
    }
});

export default SearchBar;