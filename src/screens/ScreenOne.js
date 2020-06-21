import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
//importing the components required
import ScreenName from "../components/ScreenName";
import {Ionicons} from '@expo/vector-icons'

const ScreenOne = () => {
    return (
        <View style={styles.container}>
            <ScreenName name={'ScreenOne'}/>
        </View>
    )
}

export default ScreenOne

ScreenOne.navigationOptions = screenProps = ({
    tabBarIcon:({tintColor, focused})=>(  
        <Ionicons  
            name={focused ? 'ios-person' : 'md-person'}  
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
