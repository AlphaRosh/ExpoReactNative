//import
import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

//functional component
const CTextInput = (
    { ctextiplabel,
      ctextipvalue,
      ctextiponChangetText,
      ctextipplaceholder,
      ctextipIsautocorrect,
      ctextipIssecureTextEntry
    }) => {
    const { container, textstyle, textinputstyle } = CTextIputStyles;
    return (
        <View style={container}>
            <Text style={textstyle}>{ctextiplabel}</Text>
            <TextInput style={textinputstyle}
                value={ctextipvalue}
                placeholder={ctextipplaceholder}
                onChangeText={ctextiponChangetText}
                autoCorrect={ctextipIsautocorrect}
                secureTextEntry={ctextipIssecureTextEntry}

            />
        </View>
    );
};


//style
const CTextIputStyles = StyleSheet.create({
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textstyle: {
        fontSize: 16,
        paddingLeft: 23,
        flex: 1
    },
    textinputstyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 16,
        lineHeight: 23,
        flex: 2
    }
})

//export
export { CTextInput };
