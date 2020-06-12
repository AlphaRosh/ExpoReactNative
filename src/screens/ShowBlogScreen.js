import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ShowBlogScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>ShowBlog Screen</Text>
        </View>
    )
}
ShowBlogScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Home')
})

export default ShowBlogScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})