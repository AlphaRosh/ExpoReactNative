import React from 'react'
import { View, Text } from 'react-native'

//importing Navigation Params
import { createMaterialTopTabNavigator } from "react-navigation-tabs"

//Importing Screens
import ScreenOne from '../screens/ScreenOne'
import ScreenTwo from '../screens/ScreenTwo'

//Bottom Tab Navigator
const MaterialTopTabNavigator = createMaterialTopTabNavigator(
    {
    One: ScreenOne,
    Two: ScreenTwo
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            showIcon: true,
            showLabel: true,
            style: {
                backgroundColor:'red'
            }
        }
    }
)

//exporting
export default MaterialTopTabNavigator;
