import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

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
import { createDrawerNavigator } from "react-navigation-drawer"
import { createMaterialTopTabNavigator, createBottomTabNavigator } from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack"

//importing screens
// import {
//   WelcomeScreen,
//   DashboardScreen,
//   FeedScreen,
//   ProfileScreen,
//   SettingsScreen
// } from "./screens";
import WelcomeScreen from "./screens/WelcomeScreen"
import DashboardScreen from "./screens/DashboardScreen"
import Feed from "./screens/FeedScreen"
import Profile from "./screens/ProfileScreen"
import Settings from "./screens/SettingsScreen"


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='red'
        barStyle='light-content'
      />
      <AppContainer />
    </View>



  );
}

//create tab navigation
const DashboardTabNavigator = createMaterialTopTabNavigator(
  {
  Feed,
  Profile,
  Settings
},
  {
    navigationOptions:({ navigation }) => {
      // console.log(`${navigation.state.routeName},${navigation.state.index}`)
      const { routeName } = navigation.state.routes[navigation.state.index]
      // console.log(routeName)
      return {
        headerTitle: routeName
      }
       
      
        
      
    }
  }
)
//create Stack navgation
const DashboardStacknavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator

}, {
    defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft: () => (
        <Ionicons
          name="md-menu"
          size={30}
          color="black"
          style={{ paddingLeft: 10 }}
          onPress={()=>navigation.openDrawer()}
        />)
    }
  }
});
//create drawer navigation
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: { screen: DashboardStacknavigator }
})



//createSwitchNavigation
const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }

})


const AppContainer = createAppContainer(AppSwitchNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
