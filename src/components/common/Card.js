//import libraries
import React from 'react';
import { View, StyleSheet } from 'react-native';

//component
const CCard = (props) => {
    return (
        <View style={CardStyles.container}>
            {props.children}
        </View>
        
    );

}

//styles
const CardStyles = StyleSheet.create({
    container: {
        
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 2,
        marginTop: 15,
        marginLeft:5,
        marginRight:5
    }
});

//export
export {CCard} ;