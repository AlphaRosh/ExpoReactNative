import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation';//When we dont want to pass the navigation prop directly. 
 

const ResultsList = ({ title, results, navigation }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleSytle}>{title}</Text>
            <Text style={styles.resultStyle}>Results : {results.length}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { item })}>
                            {/* For showing the restaurant details */}
                            <ResultsDetail result={item.restaurant} /> 
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}

export default withNavigation(ResultsList)//withNavigation(Component) returns a component with navigation props

const styles = StyleSheet.create({
    titleSytle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginLeft: 15,
        marginBottom: 5
    },
    containerStyle: {
        //justifyContent: 'center',
        //flex:1
        // paddingTop: 30
        marginBottom: 10

    },
    resultStyle: {
        fontSize: 15,
        marginLeft: 15
    }
});
