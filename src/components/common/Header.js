//The Header js for the application 

//Import Libraries to create component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


// Component Section
const CHeader=(props)=> {
    console.log(props.headertext);
    return (
        <View style={HeaderStyles.ViewStyle}>
            <Text style={HeaderStyles.TextStyles}>{props.headertext}</Text>
        </View>
    );
}

//Stylesheet
const HeaderStyles = StyleSheet.create({
    ViewStyle: {
        backgroundColor: '#ddd',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginVertical: 8,
        marginHorizontal: 10,
        marginTop: 15,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 20

    },
    TextStyles: {
        fontSize: 20

    }

});

//export the component
export { CHeader };