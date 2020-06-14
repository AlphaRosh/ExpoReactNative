import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import RestaurantScreen from './src/screens/RestaurantScreen'
import LoginScreen from './src/screens/LoginScreen'
import LoadingScreen from './src/screens/LoadingScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBV96K8InxnuT4U8UVAFKiPY47GwwhwidA",
    authDomain: "manager-8b40e.firebaseapp.com",
    databaseURL: "https://manager-8b40e.firebaseio.com",
    projectId: "manager-8b40e",
    storageBucket: "manager-8b40e.appspot.com",
    messagingSenderId: "651664943992",
    appId: "1:651664943992:web:3550318a12178ff352768d",
    measurementId: "G-THTM2SNJ9J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const RestaurantStack = createStackNavigator(
    {
        Search: SearchScreen,
        Restaurant: RestaurantScreen
        // Login: LoginScreen
    },
    {
        navigationOptions: {
            title: 'Restaurant Search'
        }
    });

const AuthStack = createStackNavigator(
    {
        Login: LoginScreen,
        Register: RegisterScreen
    },
    {
        navigationOptions: {
            title: 'Restaurant Search User Authentication'
        }

    })

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            Restaurant: RestaurantStack,
            Auth: AuthStack
        },
        {
            initialRouteName: 'Loading',



        }
    )

);