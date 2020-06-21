import React from 'react';
//Pulling AppNavigator from the navigation Folder
import AppNavigator from './src/navigation/AppNavigator'
import { View, StatusBar } from 'react-native';

export default App = () => {
  console.log('Hi There Bitches')
  return (
    <View style={{flex:1}}>
      <StatusBar
        backgroundColor='red'
        barStyle='light-content'
      />
      <AppNavigator/>
    </View>
    
  )
}