//import Libraries
import React from 'react';
import { View,StyleSheet } from 'react-native';

//component : functional
const CCardSection = (props) => {
    return (
        <View style={CardSectionStyles.container}>
            {props.children}
        </View>
    );
}

//Styling 
const CardSectionStyles = StyleSheet.create({
    container:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    }
});

//export
export  {CCardSection};