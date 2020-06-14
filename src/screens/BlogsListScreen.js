import React, { useContext } from 'react'
import { StyleSheet, Text, View, LinearGradient, TouchableOpacity, FlatList, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {BlogContext} from '../context/BlogContext'


const BlogsListScreen = (props) => {
    const Bloglist = useContext(BlogContext);
    // console.log(Bloglist)
    // console.log(`props: ${props}`)
    return (
        <View style={styles.container}>
            <FlatList
                data={Bloglist.data}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text>Title: {item.title}</Text>
                            <Text>Author: {item.Author}</Text>
                            <MaterialCommunityIcons
                                name="delete"
                                size={25}
                                color="blue"
                                left={20}
                            />
                        </View>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
                contentInset={{bottom:16}}

            ></FlatList>
            {/* <Text>{Bloglist}</Text> */}
            <TouchableOpacity
                style={{ backgroundColor: 'blue',height:40}}
                onPress={Bloglist.addBlogPost}
            >
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:'white'}}>Add Blog</Text></View>
                
            </TouchableOpacity>
        </View>
    )
}

BlogsListScreen.navigationOptions = (screenProps) => ({

    headerTitle: () => (
        <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
                name="blogger"
                size={25}
                color="blue"
                left={20}
            />
            <Text style={{ fontSize: 18, fontWeight: '500' }}>My Blogs</Text>
        </View>
    ),
    headerTitleStyle: {
        textAlign: 'left',

        fontSize: 24
    },
    headerRightContainerStyle: {
        paddingRight: 10,
    },
    headerRight: () => (
        
        <TouchableOpacity
            onPress={() => {
                // console.log(screenProps)
                screenProps.navigation.navigate('ShowBlog', { title: 'Show Blog' })
            }}
            style={{ backgroundColor: 'blue', color: 'white' }}>
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
        flex: 1

    },

})
