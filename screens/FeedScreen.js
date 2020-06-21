import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

const FeedScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button color="blue" title="Go to Details Page" onPress={()=>navigation.navigate('Detail')} />
        </View>
    )
}

export default FeedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})