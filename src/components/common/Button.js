//import
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

//Component
const CButton = ({ ButtonOnPress, children }) => { //arrow function

    const { ButtonTextStyle, ButtonStyle } = ButtonStyles;
    return (
        < TouchableOpacity
            style={ButtonStyle}
            onPress={ButtonOnPress} >
            <Text style={ButtonTextStyle}>
                {children}
            </Text>
        </TouchableOpacity >
    );
}

//Styles
const ButtonStyles = StyleSheet.create({
    ButtonTextStyle: {
        fontSize: 16,
        color: '#007aff',
        alignSelf: 'center',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
        
    },
    ButtonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 5
    }
});

//export 
export { CButton }; 
