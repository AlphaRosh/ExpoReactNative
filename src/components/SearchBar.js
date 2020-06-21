import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
const SearchBar = ({ term, onTermChange,onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                placeholder="Search Restaurant"
                style={styles.inputStyle}
                autoCorrect={false}
                autoCapitalize="none"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}/>
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#00B3FF',
        height: 50,
        flexDirection: 'row',
        marginBottom: 10,
        borderRadius: 5,
        borderColor: 'black'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        color: 'white'
        

    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 15,
        color:'white'
    }

});
