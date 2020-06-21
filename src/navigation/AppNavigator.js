import React from 'react'
//importing Navigation Parameters for the entire app : createSwitchNavigator and createAppContainer
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import BottomNavigator from './BottomTabNavigator'
import MaterialTopTabNavigator from './MaterialTopTabNavigator'

const AppNavigator = createAppContainer(
    
    createSwitchNavigator({
        
        //Adding routes for the navigation
        Main: MaterialTopTabNavigator
    })
)

export default AppNavigator;
