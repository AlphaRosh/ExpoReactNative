import React from 'react'
import { StyleSheet, Text, View, LinearGradient, TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const BlogsListScreen = (props) => {
    console.log(`props: ${props}`)
    return (
        <View style={styles.container}>
            <Text>BlogsList Screen</Text>
        </View>
    )
}

BlogsListScreen.navigationOptions = (screenProps) => ({

    title: 'My Blogs',
    headerTitleStyle: {
        textAlign: 'left',

        fontSize: 24
    },
   
    headerRightContainerStyle: {  
        paddingRight: 10,   
      },
    headerRight:()=> (    
        <TouchableOpacity
            onPress={() => screenProps.navigation.navigate('ShowBlog',{title:'Show Blog'})}
        style={{backgroundColor:'blue',color:'white'}}> 
          <MaterialCommunityIcons 
             name="blogger"  
             size={25}  
             color="white"  
             left={20}  
           />   
        </TouchableOpacity>
      )



})

export default BlogsListScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
