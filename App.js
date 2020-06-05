import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import RestaurantScreen from './src/screens/RestaurantScreen'
import LoginScreen from './src/screens/LoginScreen'
const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        Restaurant: RestaurantScreen,
        Login: LoginScreen
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            title: 'Restaurant Search'
        }

        
    }
);

export default createAppContainer(navigator);