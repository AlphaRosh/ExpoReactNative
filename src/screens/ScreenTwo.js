import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
//importing the components required
import ScreenName from "../components/ScreenName";
//importing vector icons
import {Ionicons} from '@expo/vector-icons'

const ScreenTwo = () => {
    return (
        <View style={styles.container}>
            <ScreenName name={'ScreenTwo'}/>
        </View>
    )
}

export default ScreenTwo

ScreenTwo.navigationOptions = screenProps = ({
    tabBarIcon:({tintColor, focused})=>(  
        <Ionicons  
            name={focused ? 'ios-home' : 'md-home'}  
            color={tintColor}  
            size={25}  
        />  
    )  
})

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})
