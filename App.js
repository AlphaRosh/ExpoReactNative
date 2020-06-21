import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Navigation Format
// - AppSwitchNavigation
//    - WelcomeScreen
//      -Login button
//      -Sign up Button
//    - AppDrawerNavigation
//      - Dashboard - DashboardNavigation(needed for headers and to change the headers based on the tab)
//    - DashboardTabNavigation
//      - Tab-1 - FeedStack
//      - Tab-2 - ProfileStack
//      - Tab-3 - SettingsStack
//    - Other Files 

//Import SwitchNavigator
import {
  createSwitchNavigator,
  createAppContainer
 
} from "react-navigation";

//importing screens
import WelcomeScreen from './screens/WelcomeScreen'
import DashboardScreen from './screens/DashboardScreen'


export default function App() {
  return (
   <AppContainer/>
  );
}

//createSwitchNavigation
const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: DashboardScreen }

})

const AppContainer = createAppContainer(AppSwitchNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
