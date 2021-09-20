import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import fetchIssues from './src/api/fetchIssues'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '@appTypes/navTypes'
import Home from '@screens/Home/Home'
import Comments from '@screens/Comments/Comments'

const RootStack = createStackNavigator<RootStackParamList>()

export default function App () {
  useEffect(() => {
    (async () => {
      const resp = await fetchIssues('facebook', 'react-native')
      console.log('first', resp.data[0].id)
    })();

    (async () => {
      const resp = await fetchIssues('facebook', 'react-native')
      console.log(Object.keys(resp.data[0]))
      console.log('second', typeof resp.data[0].state)
    })()
  }, [])

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Comments" component={Comments} />
      </RootStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
