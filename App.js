import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

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
import { createStackNavigator } from "react-navigation-stack"

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
import Details from "./screens/DetailsScreen"


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

const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: ({ navigation }) => {
        return {

          headerLeft: () => (
            <Ionicons
              name="md-menu"
              size={30}
              color="black"
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
            />

          )
        }
      }
    },
    Detail: {
      screen: Details
    }
  },
  {
    defaultNavigationOptions:()=> {
      gestureEnabled: false
    }
  }
)

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Profile',
          headerLeft: () => (

            <>
              <Ionicons
                name="md-menu"
                size={30}
                color="black"
                style={{ paddingLeft: 10 }}
                onPress={() => navigation.openDrawer()}
              />
            </>
          )

        }
      }
    }
  }
)
const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Settings',
          headerLeft: () => (
            <Ionicons
              name="md-menu"
              size={30}
              color="black"
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
            />
          )
        }
      }
    }
  }
)
//create tab navigation
const DashboardTabNavigator = createMaterialTopTabNavigator(
  {
    Feed: FeedStack,
    Profile: ProfileStack,
    Settings: SettingsStack
  },
  {
    navigationOptions: ({ navigation }) => {
      // console.log(`${navigation.state.routeName},${navigation.state.index}`)
      const { routeName } = navigation.state.routes[navigation.state.index]
      // console.log(routeName)
      return {
        headerShown: false,
        headerTitle: routeName
      }




    }
  }
)
//create Stack navgation
const DashboardStacknavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator

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
