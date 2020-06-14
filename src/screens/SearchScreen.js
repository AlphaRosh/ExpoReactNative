import React, { useState ,useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView,Button, TouchableOpacity} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import * as firebase from 'firebase'


const SearchScreen = (props) => {
    
      

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

            <Text style={{marginLeft:15}}>We have found {results.length} food centers</Text>
            <ScrollView>
                <ResultsList results={filterResultsByPrice(2)} title="Silver(Low Cost)" />
                <ResultsList results={filterResultsByPrice(3)} title="Gold (Medium Cost)" />
                <ResultsList results={filterResultsByPrice(4)} title="Platinum (High Cost)" />
            </ScrollView>
        </>
    )
}

SearchScreen['navigationOptions'] =screenProps=>( {
    title:'Restaurant Search',
    headerRight: () => (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                console.log(screenProps);
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        screenProps.navigation.navigate("Auth")
                })
            }}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '300'
                }}
                    > LogOut</Text></TouchableOpacity>
    //     <Button
    //     onPress={() => alert('This is a button!')}
    //     title="Info"
    //         color="#fff"
    //         backgroundColor="black"
    //   />
      ),
})
export default SearchScreen

const styles = StyleSheet.create({
    button: {
        height: 40,
        borderRadius: 5,
        borderColor: '#000080',
        backgroundColor: "#1034A6"
      

    }
})
