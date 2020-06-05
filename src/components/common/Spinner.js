import React from 'react';
import { View , ActivityIndicator,StyleSheet} from 'react-native';

//component
const CSpinner = ({cspinnersize}) => {
    return (
        <View style={CSpinnerStyle.spinnerstyle}>
            <ActivityIndicator size={cspinnersize||'large'}/>
        </View>
    );
};
//style
const CSpinnerStyle = StyleSheet.create({
    spinnerstyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})
//export 
export { CSpinner };