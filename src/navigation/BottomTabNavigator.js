import React from 'react'
import { View, Text } from 'react-native'

//importing Navigation Params
import { createBottomTabNavigator } from "react-navigation-tabs"

//Importing Screens
import ScreenOne from '../screens/ScreenOne'
import ScreenTwo from '../screens/ScreenTwo'

//Bottom Tab Navigator
const BottomTabNavigator = createBottomTabNavigator({
    One: ScreenOne,
    Two: ScreenTwo
})

//exporting
export default BottomTabNavigator;
