import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errMsg] = useResults();

    console.log(results);

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errMsg != null ? <Text>{errMsg}</Text> : null}
            <ScrollView style={styles.scrollView}>
                {filterResultsByPrice('$') != 0 ?
                    <ResultsList
                        title='Value for money'
                        items={filterResultsByPrice('$')}
                    /> : null}
                {filterResultsByPrice('$$') != 0 ?
                    <ResultsList
                        title='Pricier meals'
                        items={filterResultsByPrice('$$')}
                    /> : null}
                {filterResultsByPrice('$$$') != 0 ?
                    <ResultsList
                        title='Big spending'
                        items={filterResultsByPrice('$$$')}
                    /> : null}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {

    },
    resultsList: {

    },
    container: {
        flex: 1
    }
});

export default SearchScreen;