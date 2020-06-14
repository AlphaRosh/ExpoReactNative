import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native'
import * as firebase from 'firebase'



const LoadingScreen = (props) => {
 
    const onAuthStateChange = () => {
        
        return firebase.auth().onAuthStateChanged(user => {
         
            // navigate(user ? "App" : "Auth");
            if (user) {
                console.log("Restaurant");
                props.navigation.navigate("Restaurant");
            } else {
                console.log("Auth");
                props.navigation.navigate("Auth");
            }
        })
    }

    useEffect(() => {
        //  onAuthStateChange(props);
        //console.log(props.navigation)
        return onAuthStateChange();
        

    }, [])
   
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
            {/* <Button title='Go To Hell' onPress={()=>props.navigation.navigate("Login")}></Button> */}
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})
