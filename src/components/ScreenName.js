import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ScreenName = (props) => {
    return (
        <View>
            <Text>{props.name}</Text>
        </View>
    )
}

export default ScreenName

const styles = StyleSheet.create({})

