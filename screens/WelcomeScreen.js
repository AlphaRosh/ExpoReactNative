import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button color="blue" title="Login" onPress={()=>navigation.navigate('Dashboard')} />
            <Button color="blue" title="Sign Up" onPress={()=> alert('Button Pressed')} />
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})
