import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [SearchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            // console.log(`Name:${result.restaurant.name}, Average Cost For Two:Rs ${result.restaurant.average_cost_for_two}`)
            return result.restaurant.price_range === price;
        });
    }
    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => SearchApi(term)} />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <Text style={{marginLeft:15}}>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList results={filterResultsByPrice(2)} title="Silver(Low Cost)" />
                <ResultsList results={filterResultsByPrice(3)} title="Gold (Medium Cost)" />
                <ResultsList results={filterResultsByPrice(4)} title="Platinum (High Cost)" />
            </ScrollView>
        </>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})
