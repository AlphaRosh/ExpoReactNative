import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const EditBlogScreen = () => {
    return (
        <View style={styles.container}>
            <Text>EditBlog Screen</Text>
        </View>
    )
}

export default EditBlogScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})